import { Calculator, Home, Notepad, Shop } from "iconsax-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleSetActivePage = (pathname: string) => {
    setActivePage(pathname);
  };

  return (
    <>
      <div className="bg-primary-100 px-6 py-4">
        <div className="flex">
          <ul className="w-full flex justify-between gap-2 text-sm">
            <li
              className={`grid w-full ${
                activePage === "/app" ? "text-primary-700" : "text-neutral-500"
              } hover:text-primary-600`}
              onClick={() => handleSetActivePage("/app")}
            >
              <Link to="/app" className="grid gap-1">
                <Home className="w-6 h-6 mx-auto " variant="Bulk" />
                <p className="text-center text-xs">Beranda</p>
              </Link>
            </li>
            <li
              className={`grid w-full ${
                activePage === "/app/calculator"
                  ? "text-primary-700"
                  : "text-neutral-500"
              } hover:text-primary-600`}
              onClick={() => handleSetActivePage("/app/calculator")}
            >
              <Link to="/app/calculator" className="grid gap-1">
                <Calculator className="w-6 h-6 mx-auto " variant="Bulk" />
                <p className="text-center text-xs">Kalkulator</p>
              </Link>
            </li>
            <li
              className={`grid w-full ${
                activePage === "/app/shop"
                  ? "text-primary-700"
                  : "text-neutral-500"
              } hover:text-primary-600`}
              onClick={() => handleSetActivePage("/app/shop")}
            >
              <Link to="/app/shop" className="grid gap-1">
                <Shop className="w-6 h-6 mx-auto " variant="Bulk" />
                <p className="text-center text-xs">Belanja</p>
              </Link>
            </li>
            <li
              className={`grid w-full ${
                activePage === "/app/profile"
                  ? "text-primary-700"
                  : "text-neutral-500"
              } hover:text-primary-600`}
              onClick={() => handleSetActivePage("/app/profile")}
            >
              <Link to="/app/history" className="grid gap-1">
                <Notepad className="w-6 h-6 mx-auto " variant="Bulk" />
                <p className="text-center text-xs">History</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
