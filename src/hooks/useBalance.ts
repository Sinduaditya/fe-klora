import { Address, JettonMaster, JettonWallet, TonClient } from "@ton/ton";
import { useEffect, useState } from "react";
import config from "../../config";
import { getDefaultWallet, getSpendingWallet } from "../utils/wallet";

const client = new TonClient({
  endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
  apiKey: "24cf68e62988d24e0b2135faad64851d79a80d9fb391df2b83f13ab182c634a8",
});

export const useBalance = () => {
  const [defaultBalance, setDefaultBalance] = useState({
    ton: 0,
    bottle: 0,
    klo: 0,
  });
  const [spendingBalance, setSpendingBalance] = useState({
    ton: 0,
    bottle: 0,
    klo: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        // Get TON Balance
        const wallet = await getDefaultWallet();
        const contract = client.open(wallet);
        const address = contract.address;
        const tonBalance = Number(await contract.getBalance()) / 1_000_000_000;

        // Get BTL Balance
        const master = client.open(
          JettonMaster.create(Address.parse(config.utilityContract))
        );

        // Get Wallet Address
        const walletAddress = await master.getWalletAddress(address);

        // Open Wallet
        const bottleWallet = client.open(JettonWallet.create(walletAddress));

        // Get Balance Bottle
        const bottleBalance = Number(await bottleWallet.getBalance()) / 10;

        setDefaultBalance({ ton: tonBalance, bottle: bottleBalance, klo: 0 });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchSpendingBalances = async () => {
      try {
        // Get TON Balance
        const wallet = await getSpendingWallet();
        const contract = client.open(wallet);
        const address = contract.address;
        const tonBalance = Number(await contract.getBalance()) / 1_000_000_000;

        // Get BTL Balance
        const master = client.open(
          JettonMaster.create(Address.parse(config.utilityContract))
        );

        // Get Wallet Address
        const walletAddress = await master.getWalletAddress(address);

        // Open Wallet
        const bottleWallet = client.open(JettonWallet.create(walletAddress));

        // Get Balance Bottle
        const bottleBalance = Number(await bottleWallet.getBalance()) / 10;

        setSpendingBalance({
          ton: tonBalance,
          bottle: bottleBalance,
          klo: 0,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpendingBalances();
    fetchBalances();
  }, []);

  return { defaultBalance, spendingBalance, loading, error };
};
