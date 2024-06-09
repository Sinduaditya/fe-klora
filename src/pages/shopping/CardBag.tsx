import { ArrowUp, CloseCircle } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { BagItem } from "../../contracts/Barter";

export default function CardBag(props: BagItem) {
  const [isSelect, setIsSelect] = useState<string>();

  const { id, image_url, level, name, price } = props;
  const myBags = "1";
  return (
    <li
      key={id}
      className="border hover:bg-primary-100 rounded-lg p-1 border-t-2 border-l-2 border-r-[5px] border-b-[3px] border-border"
    >
      <Link
        to="#"
        className="group block  overflow-hidden"
        onClick={() => setIsSelect(id.toString())}
      >
        <img src={image_url} alt={name} className="size-44 object-cover" />

        <div className="relative  pl-2">
          <p className="font-bold">Level {Number(level)}</p>
          <h3 className="text-xs font-semibold text-neutral-700">{name}</h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider font-bold text-neutral-900">
              {Number(price) / 1000000000} KLO
            </span>
          </p>
        </div>
      </Link>

      {isSelect == id.toString() ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-4 border border-gray-300 rounded-md max-w-sm">
            <CloseCircle
              onClick={() => setIsSelect("")}
              variant="Bulk"
              className="text-primary-600"
            />
            <div className=" flex flex-col justify-center items-center text-center">
              <h4 className="text-md font-bold">{name}</h4>
              <img src={image_url} className="size-40 mt-2" alt="NFT" />
            </div>
            <div className="mx-8 my-2">
              <div className="mt-2 font-medium">
                <div className="flex justify-between">
                  <p>Level : {Number(level)}</p>
                  <p>Harga : {Number(price) / 1000000000} KLO</p>
                </div>
                <div className="mt-2">
                  <p className="font-bold">Penambahan</p>
                  <p className="flex items-center gap-2">
                    Botol/Minggu : +20
                    <ArrowUp
                      className="w-4 h-4 text-primary-600"
                      variant="Bulk"
                    />
                  </p>
                  <p className="flex items-center gap-2">
                    Swap Currency : + 0.001 KLO
                    <ArrowUp
                      className="w-4 h-4 text-primary-600"
                      variant="Bulk"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              {myBags?.includes(id.toString()) ? (
                <Button text="Sudah Dimiliki" onClick={undefined} />
              ) : (
                <Button
                  onClick={() => console.log("handle purchase")}
                  text="Beli"
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}
