/* eslint-disable no-constant-condition */
import { ChangeEvent, useState } from "react";
import { BagItem } from "../contracts/Barter";
import CardBag from "./shopping/CardBag";
import Modal from "./shopping/Modal";
import SearchSort from "./shopping/SearchSort";

function Shopping() {
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const sortProducts = () => {
    let filteredProducts: BagItem[] = [
      {
        $$type: "BagItem",
        id: 1n,
        level: 3n,
        name: "Standart",
        image_url: "/bags/1.png",
        max: 5n,
        price: 5000000n,
      },
      {
        $$type: "BagItem",
        id: 2n,
        level: 5n,
        name: "Pro",
        image_url: "/bags/2.png",
        max: 5n,
        price: 6000000n,
      },
      {
        $$type: "BagItem",
        id: 3n,
        level: 9n,
        name: "Special",
        image_url: "/bags/3.png",
        max: 5n,
        price: 10000000n,
      },
    ];
    if (searchQuery.trim() !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === "levelLowToHigh") {
      return filteredProducts.sort((a, b) => Number(a.level) - Number(b.level));
    } else if (sortBy === "levelHighToLow") {
      return filteredProducts.sort((a, b) => Number(b.level) - Number(a.level));
    } else {
      return filteredProducts;
    }
  };
  const products = sortProducts();

  return (
    <>
      <div>
        <section className="grid gap-4">
          <header className="grid gap-2">
            <h2 className="text-3xl font-bold text-neutral-900">Bag Shop</h2>
            <p className=" text-neutral-500">
              Bag shop merupakan toko bag digital.
            </p>
          </header>
          <SearchSort
            handleSelect={handleSelect}
            handleSearchChange={handleSearchChange}
            sortBy={sortBy}
            searchQuery={searchQuery}
          />
          <ul className="grid gap-4 sm:grid-cols-2 ">
            {products.map((bag) => {
              return <CardBag key={bag.id} {...bag} />;
            })}
          </ul>
        </section>
      </div>

      {false ? <Modal /> : null}
    </>
  );
}

export default Shopping;
