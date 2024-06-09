import { Dispatch, SetStateAction, useState } from "react";

/**
 * History component.
 * @aplicalvin
 */
function DetailHistory({
  setDetailActive,
}: {
  setDetailActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="border rounded-sm p-2">
        <span
          onClick={() => setDetailActive(false)}
          className="flex items-start p-2 cursor-pointer"
        >
          X
        </span>

        <div className="flex flex-col items-center">
          <img className="h-24" src={"/Swap.png"} />
          <p>20 Bottle</p>
        </div>

        <div className="flex flex-col">
          <p>Transaction Details</p>
          <div className="flex justify-between">
            <p>Status</p>
            <p>Completed</p>
          </div>
          <div className="flex justify-between">
            <p>Time</p>
            <p>9.12 AM</p>
          </div>
          <div className="flex justify-between">
            <p>Date</p>
            <p>20 Aug 2023</p>
          </div>
          <div className="flex justify-between">
            <p>Transaction ID</p>
            <p>01294012qrqpwr1221</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function History() {
  const [detailActive, setDetailActive] = useState(false);
  return (
    <>
      {detailActive ? (
        <DetailHistory setDetailActive={setDetailActive} />
      ) : null}
      {!detailActive ? (
        <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200  mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
          <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
            <div className="text-lg font-bold text-navy-700 ">History</div>
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 ">
              See all
            </button>
          </div>
          <div
            onClick={() => setDetailActive(true)}
            className="cursor-pointer flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent]  bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center">
                <img
                  className="h-full w-full rounded-xl"
                  src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-base font-bold text-navy-700 ">
                  Colorful Heaven
                </h5>
                <p className="mt-1 text-sm font-normal text-gray-600">
                  Mark Benjamin
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-center text-navy-700 ">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                </svg>
              </div>
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                <p> </p>
                0.4<p className="ml-1">ETH</p>
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                <p>30s</p>
                <p className="ml-1">ago</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
