export default function Loading() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="max-h-full w-full max-w-xs overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="w-full mx-auto">
            <div className="pt-5 px-5">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold ">Transfer TON</h1>
              </div>
              <div className="flex flex-col  mx-auto my-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 animate-bounce  mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-gray-60 mx-auto">
                  Wait Confirmation ~15 Sec
                </p>
              </div>
            </div>

            <div className="space-y-2 text-left p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
