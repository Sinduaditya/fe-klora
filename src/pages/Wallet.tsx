import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { WalletContext } from "../hooks/WalletProvider";
import { useBalance } from "../hooks/useBalance";
import { sendTransfer } from "../utils/wallet";
import Balance from "./wallet/Balance";
import Loading from "./wallet/Loading";
import Tabs from "./wallet/Tabs";

export default function Wallet() {
  const { defaultBalance, spendingBalance } = useBalance();
  const { friendlyAddress } = useContext(WalletContext);
  const address = friendlyAddress;
  const balance = defaultBalance;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [formData, setFormData] = useState({ toAddress: "", amount: "" });

  const tabData = [{ label: "Spending" }, { label: "Wallet" }];
  const [activeTab, setActiveTab] = useState(tabData[0].label);

  // EVENT HANDLER
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(false);
    setIsLoading(true);
    sendTransfer(formData.toAddress, formData.amount, setIsLoading);
  };

  return (
    <>
      <Tabs
        tabData={tabData}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {isLoading && <Loading />}

      {activeTab === "Spending" ? <Balance data={spendingBalance} /> : null}
      {activeTab === "Wallet" ? (
        <div className="grid gap-10">
          <div className="grid gap-3">
            <div className="text-center ">
              <h2 className="mx-auto text-sm border border-black border-1 - w-fit p-2 rounded-3xl text-neutral-700 font-semibold">
                {address?.replace(/(.{14})..+/, "$1…")}
              </h2>

              <h1 className="my-5 text-2xl font-semibold">
                {balance?.ton} TON
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col rounded-md pt-4 shadow-sm bg-slate-100">
                  <img
                    className="h-14 mx-auto "
                    src={"/receive_green.svg"}
                  ></img>
                  <span className="text-sm text-slate-600 my-2">Receive</span>
                </div>
                <Modal
                  shouldShow={showModal}
                  onRequestClose={() => {
                    setShowModal((prev) => !prev);
                  }}
                  title="Transfer TON"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <span className="text-left font-light text-sm">
                      Make sure your destination address is correct
                    </span>

                    <input
                      id="toAddress"
                      type="text"
                      name="toAddress"
                      onChange={handleChange}
                      placeholder="Destionation Address"
                      className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-2 text-base  text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900"
                    ></input>
                    <input
                      name="amount"
                      id="amount"
                      type="number"
                      step={0.01}
                      onChange={handleChange}
                      defaultValue={0}
                      className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-2 text-base text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900"
                    ></input>
                    <Button color="primary" type="submit" text="Send" />
                  </form>
                </Modal>
                <div
                  onClick={() => setShowModal(true)}
                  className="flex flex-col rounded-md pt-4 shadow-sm bg-slate-100"
                >
                  <img
                    className="h-14 mx-auto "
                    src={"/transfer_green.svg"}
                  ></img>
                  <span className="text-sm text-slate-600 my-2">Transfer</span>
                </div>
              </div>
            </div>

            <h1 className="text-sm text-slate-700">Wallet Account</h1>
            <Balance data={balance} />
          </div>
        </div>
      ) : null}
    </>
  );
}
