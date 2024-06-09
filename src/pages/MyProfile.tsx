const MyProfile = () => {
  return (
    <div className="grid gap-10">
      <div className="grid gap-3">
        <div className="text-center ">
          <img
            src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-primary-200"
          />
          <h1 className="text-xl font-bold">Sebastian 🚀</h1>
        </div>
        <div className="flex justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-sm text-neutral-700 font-semibold">
            Total Botol Terkumpul
          </h2>
          <p className="text-sm text-neutral-400">100 Botol</p>
        </div>
        <div className="flex justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-sm text-neutral-700 font-semibold">
            Utilitas yang Dimiliki
          </h2>
          <p className="text-sm text-neutral-400">200 BTL</p>
        </div>
        <div className="flex justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-sm text-neutral-700 font-semibold">
            Koin KLO yang Dimiliki
          </h2>
          <p className="text-sm text-neutral-400">1000 KLO</p>
        </div>
        {/* NFT yang dimiliki */}
        <div className="grid justify-between gap-3 bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 my-3">
          <h2 className="text-base text-neutral-800 font-semibold">
            Koleksi NFT yang Dimiliki
          </h2>
          <div className="grid grid-cols-4 gap-3 mx-2">
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 1"
              className="w-16 h-16 rounded-full"
            />
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 2"
              className="w-16 h-16 rounded-full"
            />
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 3"
              className="w-16 h-16 rounded-full"
            />
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 4"
              className="w-16 h-16 rounded-full"
            />
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 4"
              className="w-16 h-16 rounded-full"
            />
            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 4"
              className="w-16 h-16 rounded-full"
            />

            <img
              src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
              alt="NFT 4"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
        {/* END NFT yang dimiliki */}
      </div>
    </div>
  );
};

export default MyProfile;
