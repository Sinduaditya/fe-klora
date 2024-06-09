import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WalletContext } from "../hooks/WalletProvider";
import { useBalance } from "../hooks/useBalance";
import { Button } from "./Button";
import { Modal } from "./Modal";

function TopBar() {
  const navigate = useNavigate();
  const { defaultBalance } = useBalance();
  const balance = defaultBalance;
  const { importWallet, connected, createWallet } = useContext(WalletContext);
  const token = [
    {
      symbol: "/BTLC.svg",
      balance: balance.bottle,
      ticker: "BTL",
    },
    {
      symbol: "/KLOC.svg",
      balance: balance.klo,
      ticker: "KLO",
    },
    {
      symbol: "/KLOC.svg",
      balance: balance.ton,
      ticker: "TON",
    },
  ];
  // MODAL STATE
  const [showModal, setshowModal] = useState(false);
  const [showModalImport, setshowModalImport] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [mnemonic, setMnemonic] = useState<string>("");

  // HANDLE WALLET
  const handleWallet = () => {
    if (connected) return navigate("/app/wallet");
    setshowModal((prev) => !prev);
  };

  // HANDLE IMPORT WALLET
  const handleImportWallet = () => {
    setshowModal((prev) => !prev);
    setshowModalImport((prev) => !prev);
  };

  const handleImportWalletSave = () => {
    try {
      importWallet!(mnemonic);
      setImportSuccess(true);
    } catch (error) {
      console.error("Failed to import wallet:", error);
    }
  };

  const handleCreateWallet = () => {
    try {
      createWallet!();
      setCreateSuccess(true);
    } catch (error) {
      console.error("Failed to create wallet:", error);
    }
  };

  useEffect(() => {
    if (importSuccess) {
      setshowModalImport((prev) => !prev);
    }

    if (createSuccess) {
      setshowModal((prev) => !prev);
    }
  }, [importSuccess, createSuccess]);

  return (
    <>
      <div className="flex justify-between px-3 py-4 border overflow-x-auto items-center">
        <Modal
          shouldShow={showModal}
          onRequestClose={() => {
            setshowModal((prev) => !prev);
          }}
        >
          <div className="flex flex-col space-y-2">
            <span className="text-left font-light text-sm mb-4">
              If you already have Wallet you can import the existing wallet
              using mnemonic phrase
            </span>
            <Button
              onClick={handleCreateWallet}
              color="primary"
              text={"Create new wallet"}
            />
            <Button
              color="secondary"
              onClick={handleImportWallet}
              text={"Import existing wallet"}
            ></Button>
          </div>
        </Modal>

        {/* Import Mnemonic List */}
        <Modal
          shouldShow={showModalImport}
          onRequestClose={() => {
            setshowModalImport((prev) => !prev);
          }}
          title="Import Wallet"
        >
          <div className="flex flex-col space-y-2">
            <span className="text-left font-light text-sm mb-4">
              Write 24 Words
            </span>
            <input
              type="textarea"
              onChange={(e) => setMnemonic(e.target.value)}
              className="w-full px-3 py-2 border-2 h-24 border-black rounded-lg"
              placeholder="Enter 24 words"
            />
            <Button
              color="primary"
              onClick={handleImportWalletSave}
              text={"Save"}
            />
          </div>
        </Modal>

        {/* TODO: PROFILE */}
        <img
          onClick={() => navigate("/app/profile")}
          src={"/user_blue.svg"}
          alt={"wallet_green"}
          className="h-7 cursor-pointer"
        />

        {/* TOKEN, WALLET MENU */}
        <div className="flex  items-center gap-2 bg-slate-100 rounded-full h-6 ">
          {token.map((token, id) => (
            <div key={id} className="flex gap-1 items-center">
              {/* SYMBOL */}
              <img src={token.symbol} alt={token.ticker} className="w-6 h-6" />
              {/* TICKER */}
              <p className="text-xs font-semibold text-neutral-600">
                {token.balance}
              </p>
            </div>
          ))}
          <div className="flex gap-2  items-center bg-[#8ACCD0] p-2 shadow-lg rounded-full">
            <button
              onClick={handleWallet}
              type="button"
              className="center relative "
            >
              {" "}
              <img
                src={"/wallet_white.svg"}
                alt={"wallet_green"}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
