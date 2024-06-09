export default function CardUserStats() {
  return (
    <div className="rounded-2xl bg-[#3E836B] text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
      <div>
        <span className="text-[0.85em] text-white text-opacity-70">
          Total jejak karbon kamu
        </span>
        <p className="text-2xl font-medium text-opacity-70 mb-2">240 Kg</p>

        <span className="text-[0.85em] text-white text-opacity-70">
          Jumlah pohon dibutuhkan
        </span>
        <p className="text-2xl font-medium">12 Pohon</p>
      </div>
    </div>
  );
}
