import { ChangeEvent } from "react";

export default function SearchSort({
  handleSelect,
  handleSearchChange,
  sortBy,
  searchQuery,
}: {
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sortBy: string;
  searchQuery: string;
}) {
  return (
    <div className="flex gap-2 max-w-full items-center justify-between">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="bg-white border border-neutral-200 rounded-lg px-3 py-1 text-xs"
      />
      <select
        value={sortBy}
        onChange={handleSelect}
        className="bg-white border border-neutral-200 rounded-lg px-3 py-1 text-xs text-neutral-600"
      >
        <option value="default">Default</option>
        <option value="levelLowToHigh">Low to High</option>
        <option value="levelHighToLow">High to Low</option>
      </select>
    </div>
  );
}
