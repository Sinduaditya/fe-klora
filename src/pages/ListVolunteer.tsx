import { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export default function ListVolunteer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  type volunteer = {
    id: number;
    name: string;
    location: string;
  };

  const sortvolunteers = (): volunteer[] => {
    let filteredvolunteers: volunteer[] = [
      {
        id: 12414,
        name: "John Doe",
        location: "Taman Indonesia Kaya",
      },
      {
        id: 4124,
        name: "Budi Santoso",
        location: "Jl. Bangetayu",
      },
    ];
    if (searchQuery.trim() !== "") {
      filteredvolunteers = filteredvolunteers.filter((volunteer) =>
        volunteer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredvolunteers;
  };
  const volunteers = sortvolunteers();

  const [formData, setFormData] = useState({
    amount: 0,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Modal
        shouldShow={showModal}
        onRequestClose={() => {
          setShowModal((prev) => !prev);
        }}
      >
        <label htmlFor="counter" className="font-light text-sm">
          Berapa jumlah Botol yang akan kamu berikan?
        </label>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            id="counter"
            type="number"
            defaultValue={0}
            onChange={() => setFormData({ amount: 0 })}
            className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-2 text-base font-bold text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900"
          ></input>
          <Button color="primary" type="submit" text="Send" />
        </form>
      </Modal>
      <section className="grid gap-4">
        <header className="grid gap-2">
          <h2 className="text-3xl font-bold text-neutral-900">
            List Volunteer
          </h2>
          <p className=" text-neutral-500"></p>
        </header>
        <div className="flex gap-2 max-w-full items-center justify-between">
          <input
            type="text"
            placeholder="Search volunteer..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-white border w-full border-neutral-200 rounded-lg px-3 py-2 text-xs"
          />
        </div>
        <ul className="flex flex-col gap-3 ">
          {volunteers.map((volunteer) => (
            <li
              key={volunteer.id}
              className="border hover:bg-primary-100 rounded-lg py-3 px-3 border-t-2 border-l-2 border-r-[2px] border-b-[2px] border-border"
            >
              <div
                onClick={() => setShowModal(true)}
                className="group block  overflow-hidden"
              >
                <div className="relative  pl-2">
                  <div className="flex  justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-neutral-700">
                        {volunteer.name}
                      </p>
                      <p className="text-xs font-light text-neutral-700">
                        {volunteer.location}
                      </p>
                    </div>

                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
