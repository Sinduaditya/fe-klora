import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-5xl mx-auto grid h-96 place-content-center px-4">
          <div className="text-center">
            <h1 className="text-9xl font-black text-gray-200">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-xl text-gray-500">
              Kami tidak bisa menemukan halaman yang anda maksud.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-full bg-primary-700 px-5 py-3 text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
