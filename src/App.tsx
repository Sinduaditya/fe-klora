import { Address } from "@ton/ton";
import { useTonWallet } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { FourOhFourOhFour } from "./components/landing_page/index.tsx";
import ModeratUi from "./components/volunteer/Moderat.tsx";
import { useTonClient } from "./hooks/useTonClient.ts";
import AppLayout from "./layouts/MobileLayout.tsx";
import RootLayout from "./layouts/RootLayout";
import Calculator from "./pages/Calculator.tsx";
import History from "./pages/History.tsx";
import Home from "./pages/home/Home.tsx";
import ImportWallet from "./pages/ImportWallet.tsx";
import LandingPages from "./pages/landing_page/LandingPages.tsx";
import ListVolunteer from "./pages/ListVolunteer.tsx";
import Login from "./pages/Login.tsx";
import MyProfile from "./pages/MyProfile.tsx";
import Shopping from "./pages/Shopping.tsx";
import Wallet from "./pages/Wallet.tsx";
import { userWallet } from "./recoil/atom/userWallet.ts";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <LandingPages />,
        },
        {
          path: "*",
          element: <FourOhFourOhFour />,
        },
      ],
    },

    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: "/app",
          element: <Home />,
        },
        {
          path: "/app/wallet",
          element: <Wallet />,
        },
        {
          path: "/app/history",
          element: <History />,
        },
        {
          path: "/app/wallet/import",
          element: <ImportWallet />,
        },
        {
          path: "/app/volunteer",
          element: <ModeratUi />,
        },
        {
          path: "/app/list-volunteer",
          element: <ListVolunteer />,
        },
        {
          path: "/app/calculator",
          element: <Calculator />,
        },
        {
          path: "/app/shop",
          element: <Shopping />,
        },
        {
          path: "/app/profile",
          element: <MyProfile />,
        },
      ],
    },
    {
      path: "*",
      element: <FourOhFourOhFour />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUserWalletState] = useRecoilState(userWallet);
  const wallet = useTonWallet();
  const client = useTonClient();
  useEffect(() => {
    if (!wallet) return;
    if (!client) return;
    const getBalance = async () => {
      const balance = await client.getBalance(
        Address.parse(wallet.account.address)
      );
      setUserWalletState((prevState) => {
        return { ...prevState, tonBalance: Number(balance) / 1_000_0000_000 };
      });
    };

    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, client]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
