import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { Link } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import Logo from "../../assets/logos.png"

const menus = [
  { name: "How it works", to: "howItWorks" },
  { name: "About", to: "about" },
  { name: "Contact Us", to: "contactUs" },
];

function MenuInNavbar() {
  return (
    <>
      <div>
        <ul className="grid list-none md:flex gap-3 md:gap-8 font-thin mx-4 md:mx-0 cursor-pointer">
          {menus.map((menu) => (
            <li
              className="font-medium text-black hover:text-neutral-900 hover:font-bold"
              key={menu.name}
            >
              <ScrollLink
                to={menu.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                {menu.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function CtaButton() {
  return (
    <>
      <div>
        <ul className="flex mx-4 md:mx-0 gap-2 my-2 md:flex-row  md:space-x-3 md:items-center">
          <li className="font-semibold  text-white">
            <TonConnectButton />
          </li>
        </ul>
      </div>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex gap-3 items-end">
              <img src={Logo} width="40" height="40" alt=" klora"/>
              <Link to="/" className="text-3xl font-bold">
                Klora
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <MenuInNavbar />
            </div>
          </div>
          <div className="hidden md:flex">
            <CtaButton />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <CloseSquare className="block h-6 w-6" variant="Bulk" />
              ) : (
                <HambergerMenu className="block h-6 w-6" variant="Bulk" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden " id="mobile-menu">
            <div className="grid gap-3 px-2 pt-2 pb-6 space-y-1 sm:px-3">
              <MenuInNavbar />
              <CtaButton />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
