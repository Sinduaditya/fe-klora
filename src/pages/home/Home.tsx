import { Milk } from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import CardUserStats from "./CardUserStat";
import DisplayBags, { bagDetail } from "./DisplayBags";

export default function Home() {
  // REACT ROUTER HOOK
  const navigate = useNavigate();
  const [selectedBag, setSelectedBag] = useState<number>();
  // TODO: Fetch data from API BLOCKCHAIN
  const ListBags: bagDetail[] = [
    {
      id: 1,
      level: "Level 1",
      image_url: "1.png",
      amount: 2,
      max: 5,
    },
    {
      id: 2,
      level: "Level 2",
      image_url: "2.png",
      amount: 2,
      max: 5,
    },
  ];
  return (
    <div className="grid gap-3">
      <DisplayBags
        ListBags={ListBags}
        selectedBag={selectedBag}
        setSelectedBag={setSelectedBag}
      />

      <div className="flex items-center">
        <Milk variant="Bulk" className="text-[#3E836B] w-12 h-10" />
        <div className="grid items-center w-full px-2">
          <div className="grid gap-1 ">
            <span id="ProgressLabel" className="sr-only text-neutral-700">
              Loading...
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              className="block rounded-full bg-[#CAE1E1]                  ]"
            >
              <span
                className="block h-3 rounded-full bg-[#3E836B]"
                style={{
                  width: `${0.1 * 100}%`,
                }}
              ></span>
            </span>
            <div className="flex justify-between">
              <p className="text-xs text-neutral-400">{2} botol</p>
              <p className="text-xs text-neutral-400">{10} botol</p>
            </div>
          </div>
        </div>
      </div>

      <CardUserStats />

      {/* Deposit Bottles */}
      <Button
        color="primary"
        onClick={() => navigate("/app/list-volunteer")}
        text={"DEPOSIT BOTTLES"}
      />
    </div>
  );
}
