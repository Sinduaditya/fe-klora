import { Button } from "../components/Button";

export default function Login() {
  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="flex flex-col justify-center items-center bg-white max-w-sm  h-screen">
        <p className="text-center text-2xl font-semibold my-8">Welcome Back</p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <input
            type="email"
            placeholder="example@email.com"
            value={""}
            className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-2 text-sm text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900"
          ></input>

          <input
            type="password"
            placeholder="*******"
            value={""}
            className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-2 text-sm text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900"
          ></input>
          <Button text="Login" />
        </div>
      </div>
    </div>
  );
}
