import { Button } from "../components/Button";

export default function ImportWallet() {
  return (
    <>
      <label htmlFor="seed">Seed Phrase</label>
      <textarea
        id="seed"
        rows={4}
        className="block p-2.5 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Your seed phrase..."
      ></textarea>

      <Button text={"Submit"} />
    </>
  );
}
