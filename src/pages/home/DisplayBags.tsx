import { Dispatch, SetStateAction, useContext, useState } from "react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFlip, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../components/Button";
import { WalletContext } from "../../hooks/WalletProvider";

export interface bagDetail {
  id: number;
  level: string;
  image_url: string;
  amount: number;
  max: number;
}

function Empty() {
  return (
    <div className="rounded-3xl border-t-2 border-l-2 border-r-8 pr-2 border-b-8 border-border">
      <Swiper
        effect={"flip"}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper max-w-xs"
      >
        <SwiperSlide className="grid gap-2 pt-4  relative">
          <div className="flex absolute z-10 w-full mt-4 ">
            <div className="grid px-4 mt-2 ml-4  bg-neutral-50 rounded-full border  border-t-2 border-l-2 border-r-4 border-b-4 border-border">
              <p className="text-sm">Wallet Not Connected</p>
            </div>
          </div>
          <img
            src={`/bags/1.png`}
            alt="Gambar"
            className="rounded-3xl grayscale bg-green-200 ml-1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default function DisplayBags({
  ListBags,
  selectedBag,
  setSelectedBag,
}: {
  ListBags: bagDetail[];
  selectedBag: number | undefined;
  setSelectedBag: Dispatch<SetStateAction<number | undefined>>;
}) {
  const [currentBag, setCurrentBag] = useState<number>();
  const { connected } = useContext(WalletContext);

  const handleSelectBag = () => {
    setSelectedBag(currentBag);
  };

  return (
    <>
      {!connected ? <Empty /> : null}
      {connected ? (
        <div className="rounded-3xl border-t-2 border-l-2 border-r-8 pr-2 border-b-8 border-border">
          <Swiper
            effect={"flip"}
            pagination={true}
            onSlideChange={(e) => setCurrentBag(ListBags[e.activeIndex].id)}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper max-w-xs"
          >
            {ListBags.map((bag) => (
              <SwiperSlide key={bag.id} className="grid gap-2 pt-4  relative">
                <div className="flex absolute w-full mt-4 ">
                  <div className="grid px-4 mt-2 ml-4  bg-neutral-50 rounded-full border  border-t-2 border-l-2 border-r-4 border-b-4 border-border">
                    <p className="text-sm">{bag.level.toString()}</p>
                  </div>
                </div>
                <img
                  src={`/bags/${bag.image_url}`}
                  alt="Gambar"
                  className="rounded-3xl  bg-green-200 ml-1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {selectedBag !== currentBag ? (
            <div className="max-w-xs mx-auto my-4">
              <Button
                onClick={handleSelectBag}
                color="primary"
                text={"EQUIP"}
              />
            </div>
          ) : null}

          {selectedBag === currentBag ? (
            <div className="max-w-xs mx-auto my-4">
              <Button color="disabled" text={"USED"} />
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
