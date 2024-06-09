import { mnemonicNew } from "@ton/crypto";
// import { WalletContractV4 } from "@ton/ton";
import { ReactElement, createContext, useEffect, useState } from "react";
import { encryptMnemonic } from "../utils/utils";
import { getDefaultWallet } from "../utils/wallet";

interface WalletContextType {
  connected: boolean;
  friendlyAddress: string;
  importWallet: null | ((mnemonic: string) => Promise<void>);
  createWallet: null | (() => Promise<void>);
  loading: boolean;
}

export const WalletContext = createContext<WalletContextType>({
  connected: false,
  loading: false,
  importWallet: null,
  createWallet: null,
  friendlyAddress: "",
});

export default function WalletProvider({
  children,
}: {
  children: ReactElement;
}) {
  // const [wallet, setWallet] = useState<WalletContractV4 | null>();
  const [friendlyAddress, setFriendlyAddress] = useState<string>("");
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setError] = useState<unknown>(null);

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        const defaultMnemonicEnc = localStorage.getItem("default");
        const spendingMnemonicEnc = localStorage.getItem("spending");
        if (!spendingMnemonicEnc) {
          localStorage.setItem(
            "spending",
            encryptMnemonic(
              "jar cloth child year quantum innocent audit resemble control hand devote kitten hope figure steak control enter legal worry glance acid setup outdoor school"
            )
          );
        }
        if (defaultMnemonicEnc) {
          const wallet = await getDefaultWallet();
          // setWallet(wallet);
          setConnected(true);
          setFriendlyAddress(wallet.address.toString());
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    checkWalletConnection();
  }, []);

  // const connectWallet = async () => {
  //   setLoading(true);
  //   try {
  //     const wallet = await getDefaultWallet();
  //     setWallet(wallet);
  //     setConnected(true);
  //     setError(null);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const createWallet = async () => {
    setLoading(true);
    try {
      const mnemonic = await mnemonicNew();
      const encryptedMnemonic = encryptMnemonic(mnemonic.join(" "));
      localStorage.setItem("default", encryptedMnemonic);
      // const wallet = await getDefaultWallet();
      // setWallet(wallet);
      setConnected(true);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const importWallet = async (mnemonic: string) => {
    setLoading(true);
    try {
      const encryptedMnemonic = encryptMnemonic(mnemonic);
      localStorage.setItem("default", encryptedMnemonic);
      // const wallet = await getDefaultWallet();
      // setWallet(wallet);
      setConnected(true);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // const disconnectWallet = () => {
  //   localStorage.removeItem("default");
  //   setWallet(null);
  //   setConnected(false);
  // };

  return (
    <WalletContext.Provider
      value={{
        connected,
        loading,
        importWallet,
        createWallet,
        friendlyAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
