import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, WalletContractV4, internal } from "@ton/ton";
import { Dispatch, SetStateAction } from "react";
import { decryptMnemonic } from "./utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const client = new TonClient({
  endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
  apiKey: "24cf68e62988d24e0b2135faad64851d79a80d9fb391df2b83f13ab182c634a8",
});

const waitForLocalStorageItem = (
  key: string,
  interval: number = 100
): Promise<string> => {
  return new Promise((resolve) => {
    const check = () => {
      const value = localStorage.getItem(key);
      if (value) {
        resolve(value);
      } else {
        setTimeout(check, interval);
      }
    };
    check();
  });
};

const getKeyPair = async () => {
  // keyDefault
  const defaultMnemonicEnc = await waitForLocalStorageItem("default");
  const defaultMnemonic = decryptMnemonic(defaultMnemonicEnc);
  const keyDefault = await mnemonicToPrivateKey(defaultMnemonic.split(" "));

  // keySpending
  const spendingMnemonicEnc = await waitForLocalStorageItem("spending");
  const spendingMnemonic = decryptMnemonic(spendingMnemonicEnc);
  const keySpending = await mnemonicToPrivateKey(spendingMnemonic.split(" "));
  return { keyDefault, keySpending };
};

export const getDefaultWallet = async () => {
  const { keyDefault } = await getKeyPair();
  const defaultWallet = WalletContractV4.create({
    workchain: 0,
    publicKey: keyDefault.publicKey,
  });

  return defaultWallet;
};

export const getSpendingWallet = async () => {
  const { keySpending } = await getKeyPair();
  const spendingWallet = WalletContractV4.create({
    workchain: 0,
    publicKey: keySpending.publicKey,
  });
  return spendingWallet;
};

export const sendTransfer = async (
  toAddress: string,
  amount: string,
  setLoading: Dispatch<SetStateAction<boolean | undefined>>
) => {
  const wallet = await getDefaultWallet();
  const contract = client.open(wallet);
  const { keyDefault } = await getKeyPair();
  const seqno: number = await contract.getSeqno();
  await contract.sendTransfer({
    seqno,
    secretKey: keyDefault.secretKey,
    messages: [
      internal({
        value: amount,
        to: toAddress,
        body: "Example transfer body",
      }),
    ],
  });
  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    console.log("waiting for transaction to confirm...");
    await sleep(1500);
    currentSeqno = await contract.getSeqno();
  }
  console.log("transaction confirmed!");
  setLoading(false);
  return true;
};
