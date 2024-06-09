import { mnemonicToWalletKey } from "@ton/crypto";
import { Address, WalletContractV4 } from "@ton/ton";
import { useEffect, useState } from "react";
import { decryptMnemonic } from "../utils/utils";

export default function useWalletStatus() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mnemonic, _] = useState(() => {
    try {
      const item = window.localStorage.getItem("UM");
      if (!item) return null;
      return decryptMnemonic(item);
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  const [address, setAddress] = useState<string>("");
  const [rawAddress, setRawAddress] = useState<Address>();

  useEffect(() => {
    const get = async () => {
      if (!mnemonic) return;
      const key = await mnemonicToWalletKey(mnemonic.split(" "));
      const wallet = WalletContractV4.create({
        publicKey: key.publicKey,
        workchain: 0,
      });
      setAddress(wallet.address.toString());
      setRawAddress(Address.parse(wallet.address.toString()));
    };
    get();
  }, [mnemonic]);

  return {
    address,
    rawAddress,
  };
}
