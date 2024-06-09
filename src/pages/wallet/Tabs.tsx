import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

/**
 * History component.
 * @aplicalvin
 */
export default function Tabs({
  tabData,
  setActiveTab,
  activeTab,
}: {
  tabData: { label: string }[];
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}) {
  return (
    <div className="shadow rounded-full h-10 flex p-1 relative items-center">
      {tabData.map((tab, index) => (
        <div
          key={index}
          onClick={() => setActiveTab(tab.label)}
          className="w-full flex justify-center "
        >
          <button>{tab.label}</button>
          {activeTab === tab.label ? (
            <span
              className={clsx(
                "bg-indigo-600 cursor-pointer shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute",
                tab.label === "Spending" ? "left-1 " : "right-1"
              )}
            >
              {tab.label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
