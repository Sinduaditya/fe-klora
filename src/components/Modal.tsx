import { ReactElement } from "react";

interface ModalProps {
  shouldShow: boolean;
  onRequestClose: () => void;
  children: ReactElement | ReactElement[];
  title?: string
}
export const Modal = (props: ModalProps) => {
  const { shouldShow, onRequestClose, children, title } = props;
  return shouldShow ? (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="max-h-full w-full max-w-xs overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="w-full mx-auto">
            <div className="pt-5 px-5 ">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold ">{ title != null ? title : "TON Wallet"}</h1>
                <svg onClick={onRequestClose}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="pb-5 pt-2 px-5 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
