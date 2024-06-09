import Logo from "../../assets/logos.png"
import {Link} from "react-router-dom";
function Footer() {
  return (
      <>
        <footer className="bg-white mt-20">
          <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="lg:flex lg:items-end lg:justify-between">
              <div>
                <div className="flex justify-center gap-3 lg:justify-start">
                  <img src={Logo} width="40" height="40" alt=" klora"/>
                  <h1 className="text-text font-bold text-3xl">Klora</h1>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                  Melalui inovasi dan keberlanjutan, kami bertujuan untuk mengubah pandangan masyarakat terhadap botol air minum sekali pakai,
                  menjadikannya lebih bernilai dan berkontribusi secara signifikan dalam menjaga kelestarian lingkungan.
                </p>
              </div>

              <ul
                  className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
              >
                <li>
                  <Link className="text-gray-700 transition hover:text-gray-700/75" to="#"> About </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-gray-700/75" to="#"> Services </Link>
                </li>

                <li>
                  <Link className="text-gray-700 transition hover:text-gray-700/75" to="#"> Projects </Link>
                </li>
              </ul>
            </div>

            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </footer>
      </>
  );
}

export default Footer;
