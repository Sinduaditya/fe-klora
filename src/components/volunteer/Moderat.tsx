// Dummy data for transactions
// const dummyData = [
//   {
//     id: 1,
//     name: "Calvin",
//     address: "0:1234567890abcdef",
//     totalBottles: 10,
//     verified: false,
//   },
//   {
//     id: 2,
//     name: "Sen",
//     address: "0:abcdef1234567890",
//     totalBottles: 5,
//     verified: true,
//   },
//   // Add more dummy data here
// ];

const ModeratUi = () => {
  // const [transactions, setTransactions] = useState(dummyData);
  // const [totalCollected, setTotalCollected] = useState(15); // Example total bottles collected by admin

  // const handleVerify = (id) => {
  //   const updatedTransactions = transactions.map((transaction) =>
  //     transaction.id === id ? { ...transaction, verified: true } : transaction
  //   );
  //   setTransactions(updatedTransactions);
  // };

  // const handleCancel = (id) => {
  //   const updatedTransactions = transactions.filter(
  //     (transaction) => transaction.id !== id
  //   );
  //   setTransactions(updatedTransactions);
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-lg ">Senin, 12 April 2024</h1>

      <div className="rounded-2xl mb-2 bg-[#3E836B] text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div>
          <span className="text-[0.85em] text-white text-opacity-70">
            Total botol terkumpul
          </span>
          <p className="text-2xl font-medium text-opacity-70 mb-2">24 botol</p>

          <span className="text-[0.85em] text-white text-opacity-70">
            Jumlah Transaksi
          </span>
          <p className="text-2xl font-medium">16 transaksi</p>
        </div>
      </div>

      <span>Transaksi Masuk</span>
      <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        <a
          href="#"
          aria-current="true"
          className="block w-full px-4 py-3  border-b border-gray-200 rounded-t-lg cursor-pointer "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg ">John Doe</p>
              <p className="text-lg ">8 Botol</p>
              <p className="flex flex-col text-sm text-slate-600 ">
                <span className="flex gap-1 items-center">
                  18-2-2024 12:12 AM
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                className="w-full cursor-pointer transition-all bg-[#3E836B] text-slate-100  text-base font-medium px-5 rounded-lg
  border-[#25585E] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </button>

              <button
                className=" cursor-pointer transition-all bg-[#ff4949] text-slate-100  text-base font-medium px-5 py-3 rounded-lg
  border-[#d72121] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ModeratUi;
