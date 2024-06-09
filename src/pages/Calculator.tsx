import { useState } from "react";
import { Button } from "../components/Button";

const Calculator = () => {
  const [bottleSizes, setBottleSizes] = useState(["", "", ""]);
  const [weeks, setWeeks] = useState([0, 0, 0]);
  const [carbonEmissions, setCarbonEmissions] = useState(0);
  const [totalBottles, setTotalBottles] = useState(0);
  const [totalUtility, setTotalUtility] = useState(0);
  const [totalCurrency, setTotalCurrency] = useState(0);

  const handleCalculate = () => {
    const carbonFactors = {
      "330ml": 0.2,
      "660ml": 0.3,
      "1500ml": 0.5,
    };

    let totalCarbon = 0;
    let bottles = 0;
    for (let i = 0; i < bottleSizes.length; i++) {
      const carbonFactor = carbonFactors[bottleSizes[i]];
      totalCarbon += carbonFactor * weeks[i];
      bottles += weeks[i];
    }
    setCarbonEmissions(totalCarbon.toFixed(2));
    setTotalBottles(bottles);
    setTotalUtility(bottles);
    setTotalCurrency((bottles * 0.001).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h1 className="text-xl font-bold text-center mb-6">
        Estimasi Karbon dari Botol Plastik
      </h1>
      {bottleSizes.map((size, index) => (
        <div key={index} className="mb-1">
          <div className="flex justify-between">
            <label
              htmlFor={`bottleSize${index}`}
              className="block text-sm font-semibold mb-1"
            >
              Ukuran Botol {index + 1}
            </label>
            <label
              htmlFor={`consumption${index}`}
              className="block text-sm font-semibold mb-1"
            >
              Konsumsi / Minggu
            </label>
          </div>
          <div className="flex items-center">
            <select
              id={`bottleSize${index}`}
              className="w-1/2 px-4 py-2 border rounded-md mr-2 focus:outline-none focus:border-primary-500"
              value={size}
              onChange={(e) => {
                const newSizes = [...bottleSizes];
                newSizes[index] = e.target.value;
                setBottleSizes(newSizes);
              }}
            >
              <option value="">Ukuran</option>
              <option value="330ml">330 ml</option>
              <option value="660ml">660 ml</option>
              <option value="1500ml">1500 ml</option>
            </select>
            <input
              type="number"
              id={`consumption${index}`}
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:border-primary-500"
              placeholder="Jumlah Minggu"
              value={weeks[index]}
              onChange={(e) => {
                const newWeeks = [...weeks];
                newWeeks[index] = parseInt(e.target.value);
                setWeeks(newWeeks);
              }}
            />
          </div>
        </div>
      ))}
      <Button
        color="primary"
        onClick={handleCalculate}
        text="Hitung Sekarang"
      />
      {carbonEmissions > 0 && (
        <div className="">
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-md">
              <h2 className="font-semibold">Total Botol</h2>
              <p className="text-lg">{totalBottles} Botol</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md">
              <h2 className="font-semibold">Karbon yang Dihasilkan</h2>
              <p className="text-lg">{carbonEmissions} kgCO2</p>
            </div>
          </div>
          <div className="grid col-span-1 gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md flex justify-between">
              <h2 className="font-semibold">Total Utility</h2>
              <p className="text-lg">{totalUtility} BTL</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md flex justify-between">
              <h2 className="font-semibold">Total KLO</h2>
              <p className="text-lg">{totalCurrency} KLO</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
