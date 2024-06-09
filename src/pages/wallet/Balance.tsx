export default function Balance({
  data,
}: {
  data: {
    ton: number;
    bottle: number;
    klo: number;
  };
}) {
  return (
    <ul className="w-full text-sm font-medium text-gray-900 bg-white border-2 border-gray-700 rounded-lg ">
      <li className="w-full flex justify-between px-4 py-3 border-b-2 border-gray-700 rounded-t-lg ">
        <span className="flex gap-1 items-center text-sm text-neutral-700 font-semibold">
          <img className="h-5" src={"/KLOC.svg"} />
          KLO
        </span>
        <span className="text-sm text-neutral-950">{data.klo}</span>
      </li>

      <li className="w-full flex justify-between px-4 py-3 border-b-2 border-gray-700 rounded-t-lg ">
        <span className="flex gap-1 items-center text-sm text-neutral-700 font-semibold">
          <img className="h-5" src={"/BTLC.svg"} />
          BTL
        </span>
        <span className="text-sm text-neutral-950">{data.bottle}</span>
      </li>

      <li className="w-full flex justify-between px-4 py-3 border-b-2 border-gray-700 rounded-t-lg ">
        <span className="flex gap-1 items-center text-sm text-neutral-700 font-semibold">
          <img className="h-5" src={"/BTLC.svg"} />
          TON
        </span>
        <span className="text-sm text-neutral-950">{data.ton}</span>
      </li>
    </ul>
  );
}
