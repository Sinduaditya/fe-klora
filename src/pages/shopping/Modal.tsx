import { BuyCrypto } from "iconsax-react";

export default function Modal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 border border-gray-300 rounded-md max-w-sm flex flex-col text-center items-center">
        <BuyCrypto className="text-green-500 w-12 h-12 mb-2" />
        <p className="text-lg font-bold">
          Pembelian <br /> {"aaa"} <br /> Sukses!
        </p>
      </div>
    </div>
  );
}
