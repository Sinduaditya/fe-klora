import { Address, beginCell, toNano } from "@ton/core";
import { JettonMaster, JettonWallet } from "@ton/ton";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import config from "../../../config";
import { Barter, SendBottle } from "../../contracts/Barter";
import { useTonClient } from "../../hooks/useTonClient";

// type SendBottleWithId = {
//   id: number;
//   $$type: "SendBottle";
//   masterAddress: Address;
//   name: string;
//   senderAddress: Address;
//   total: bigint;
// };

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Volunteer() {
  const [tonConnectUI] = useTonConnectUI();

  const [verify, setVerify] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVerified, _] = useState<boolean | null>(false);

  // State
  const [myBottle, setMyBottle] = useState<number>();
  const [bottlePool, setBottlePool] = useState<SendBottle[]>();

  // Logic #
  // const { sender } = useTonConnect();
  const friendlyAddress = useTonAddress();
  const client = useTonClient();
  const { utilityContract, barterContract } = config;

  const [balance, setBalance] = useState<null | number>(null);
  const [tonBalance, setTonBalance] = useState<null | number>(null);
  console.log(balance, tonBalance);
  const [transfer, setTransfer] = useState<boolean>(false);
  const [DST, setDST] = useState<Address>();

  useEffect(() => {
    const get = async () => {
      if (!client) return;
      const jettonMaster = client.open(
        JettonMaster.create(Address.parse(utilityContract.toString()))
      );

      if (!friendlyAddress) return;
      const tonBalance = await client.getBalance(
        Address.parse(friendlyAddress.toString())
      );
      setTonBalance(Number(tonBalance) / 1000000000);
      const jettonAddress = await jettonMaster.getWalletAddress(
        Address.parse(friendlyAddress.toString())
      );

      const jettonWallet = client.open(JettonWallet.create(jettonAddress));

      if (transfer && DST) {
        // ## TRANSFER STATE
        // transfer#0f8a7ea5 query_id:uint64 amount:(VarUInteger 16) destination:MsgAddress
        // response_destination:MsgAddress custom_payload:(Maybe ^Cell)
        // forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell)
        // = InternalMsgBody;
        const walletDST = await jettonMaster.getWalletAddress(DST);
        console.log("walletDST", walletDST);
        const forwardPayload = beginCell()
          .storeUint(0, 32) // 0 opcode means we have a comment
          .storeStringTail("Get Reward")
          .endCell();

        const body = beginCell()
          .storeUint(0x0f8a7ea5, 32) // opcode for jetton transfer
          .storeUint(0, 64) // query id
          .storeCoins(5) // jetton amount, amount * 10^9
          .storeAddress(walletDST) // TON wallet destination address
          .storeAddress(walletDST) // response excess destination
          .storeBit(0) // no custom payload
          .storeCoins(toNano("0.02")) // forward amount (if >0, will send notification message)
          .storeBit(1) // we store forwardPayload as a reference
          .storeRef(forwardPayload)
          .endCell();

        const transaction = {
          messages: [
            {
              address: jettonWallet.address.toString(), // sender jetton wallet
              amount: toNano("0.1").toString(), // for commission fees, excess will be returned
              payload: body.toBoc().toString("base64"), // payload with jetton transfer and comment body
            },
          ],
          validUntil: Math.floor(Date.now() / 1000) + 360,
        };
        await sleep(5000);
        if (confirm("Apakah anda ingin mengirim reward? ") == true) {
          const result = await tonConnectUI.sendTransaction(transaction);
          console.log(result);
          setTransfer(false);
        }
      }
      const balance = await jettonWallet.getBalance();
      setBalance(Number(balance));
    };
    get();

    const getBarter = async () => {
      if (!client) return;
      const barterMaster = client.open(
        Barter.fromAddress(Address.parse(barterContract.toString()))
      );

      if (!friendlyAddress) return;
      const myBottle = await barterMaster.getTotalBottle(
        Address.parse(friendlyAddress)
      );
      setMyBottle(Number(myBottle));

      const bottlePool = await barterMaster.getSendBottles();
      if (bottlePool.values().length == 0) return;
      setBottlePool(bottlePool.values());
      setDST(bottlePool.values()[0].senderAddress);

      //   if (verify && DST && !isVerified) {
      //     await barterMaster.send(
      //       sender,
      //       { value: toNano("0.01") },
      //       {
      //         $$type: "ArgVerifyBottle",
      //         address: DST,
      //         amount: BigInt(0),
      //       }
      //     );
      //     // TODO CLEAR WITH GET
      //     setIsVerified(true);
      //     await sleep(5000);
      //     console.warn("TODO CLEAR WITH GET");
      //     setTransfer(true);
      //   }
    };
    getBarter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, friendlyAddress, isVerified, transfer, verify]);

  return (
    <div className="container mx-auto">
      <div className="mb-6 p-3 shadow-md rounded-md">
        <h1 className="font-semibold text-2xl">Halo Calvin 👋</h1>
        <div className="flex justify-between  mt-2 pb-1.5">
          <h2 className="text-neutral-700 font-medium">
            Anda berhasil menampung
          </h2>
          <p className="text-sm  text-neutral-400">{myBottle} Botol</p>
        </div>
      </div>
      <h1 className="text-xl font-semibold mb-4">List all users</h1>

      {/* Detail Pengguna */}
      {bottlePool && (
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <div className="flex items-center mb-2">
            <span className="mr-2">Name:</span>
            <span className="font-semibold">{bottlePool[0].name}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Wallet Address:</span>
            <span className="font-semibold">
              {bottlePool[0].senderAddress.toString()}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Total Botol:</span>
            <input
              type="number"
              className="border rounded-md px-2 py-1"
              defaultValue={Number(bottlePool[0].total)}
            />
          </div>
          <div className="mb-2">
            {!isVerified ? (
              <div className="flex">
                <button
                  className="font-medium bg-primary-700 hover:bg-primary-600 text-white px-6 py-1 rounded-md mr-2"
                  onClick={() => setVerify(true)}
                >
                  Verify
                </button>
                <button className="font-medium bg-red-700 hover:bg-red-600 text-white px-6 py-1 rounded-md">
                  Cancel
                </button>
              </div>
            ) : (
              <div className="mt-4 bg-primary-500 text-white p-2 rounded-md">
                Sedang dikirim
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
