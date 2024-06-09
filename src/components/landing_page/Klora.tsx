import AOS from "aos";
import "aos/dist/aos.css";

import {useEffect} from "react";

function Klora() {
    useEffect(() => {
        AOS.init({
            delay: 300,
            duration: 800,
        });
    });
    return (
        <>
            <div id="about" className="w-full mt-16 text-text font-outfit md:pt-[1vh] mb-12">
                <div className="grid xl:max-w-5xl mx-auto gap-16 md:flex justify-between items-center space-x-18 px-10 xl:px-0">
                    {/* text */}
                    <div className="flex flex-col">
                        <div className="mt-10 mb-10">
                            <h1 className="font-bold text-primary-700 text-5xl">
                                Our Mission
                            </h1>
                            <p className="text-xl mt-10">
                                Klora bertekad untuk menciptakan perubahan yang
                                signifikan dalam pandangan masyarakat terhadap
                                botol air minum sekali pakai. Kami percaya bahwa
                                setiap botol dapat memiliki nilai yang lebih
                                dari sekadar pembuangannya, dan kami berkomitmen
                                untuk merubahnya menjadi aset bernilai yang
                                membawa manfaat bagi lingkungan dan komunitas,
                                di bantu dengan Fitur Fitur yang ada di Klora.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Carbon Calculator
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Swap Utility to Crypto Coin (KLO)
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Bag
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* mockup */}
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
                         data-aos="zoom-in-up"
                         data-aos-duration="1000"
                    >
                        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <img
                                src="/mockup.png"
                                className="dark:hidden w-[272px] h-[572px]"
                                alt="mockup"
                            />
                            <img
                                src="/mockup.png"
                                className="hidden dark:block w-[272px] h-[572px]"
                                alt="mockup"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Klora;
