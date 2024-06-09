import "aos/dist/aos.css";
import AOS from "aos";
import {useEffect} from "react";
const Roadmap = () => {
    useEffect(() => {
        AOS.init({
            delay: 300,
            duration: 800,
        });
    });
    return (
        <div id="howItWorks" className="p-4 mt-16">
            <div className="text-center text-text mb-12 ">
                <h1 className="text-4xl font-bold mb-2 text-primary-700">How it works</h1>
                <p className="font-medium text-lg">Alur ini akan menjelaskan bagaimana user mendapatkan Currency dari
                    pertukaran botol ke Volunteer Klora</p>
            </div>
            <h2 className="text-center font-semibold text-xl ">Mulai</h2>
            <div className="flex max-w-5xl flex-col grid-cols-9 p-2 mx-auto md:grid">
                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-lg font-semibold lg:text-xl">Pendaftaran User</h3>
                        <p className="mt-2 leading-6">
                            Di fase ini user akan melakukan registrasi dan login terlebih dahulu dengan mengaitkan Wallet Crypto nya. lalu user akan di
                            arahkan ke halaman dashboard dari Klora.
                        </p>
                        <span className="absolute text-sm text-text font-bold -top-5 left-2 whitespace-nowrap">
                             Tahap Pertama
                        </span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div
                                className="w-1 h-full bg-primary-700 rounded-t-full "></div>
                        </div>
                        <div
                            className="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-700 rounded-full top-1/2"/>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-primary-700"/>
                        </div>
                        <div
                            className="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-700 rounded-full top-1/2"/>
                    </div>
                    <div
                        className="relative p-4 my-6 text-gray-800  bg-white rounded-xl col-start-6 col-end-10 mr-auto"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-lg font-semibold lg:text-xl">Memilih model BAG</h3>
                        <p className="mt-2 leading-6">Di saat proses ini user akan memilih model BAG. BAG yang di pilih akan mempengaruhi batas pengumpulan botol sekali pakai dalam seminggu
                            dan juga mempengaruhi nilai tukar utility BTL terhadap Currency KLO (Toncoin).</p>
                        <span className="absolute text-sm text-text font-bold -top-5 left-2 whitespace-nowrap">
                            Tahap Kedua
                            </span>
                    </div>
                </div>
                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-lg font-semibold lg:text-xl">Mengumpulkan Botol sekali pakai</h3>
                        <p className="mt-2 leading-6">User akan menyerahkan botol sekali pakai tersebut ke Volunteer
                            Klora pada lokasi yang tertera di halaman Home app, selanjutnya Volunteer akan
                            melakukan vertifikasi terkait jumlah total botol yang diserahkan. </p>
                        <span className="absolute text-sm text-text font-bold -top-5 left-2 whitespace-nowrap">
          Tahap Ketiga
        </span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div
                                className="w-1 h-full bg-primary-700 rounded-t-full "></div>
                        </div>
                        <div
                            className="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-700 rounded-full top-1/2"/>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-primary-700"/>
                        </div>
                        <div
                            className="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-700 rounded-full top-1/2"/>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto"
                         data-aos="fade-left"
                         data-aos-duration="1000"
                    >
                        <h3 className="text-lg font-semibold lg:text-xl">Swap Utility to Toncoin Currency (KLO)</h3>
                        <p className="mt-2 leading-6">Setelah Jumlah botol di konfirmasi, user akan
                            mendapatkan notifikasi terkait jumlah Utility yang diterima, dan selanjutnya dapat di tukar
                            dari utility ke Toncoin Currency.
                        </p>
                        <span className="absolute text-sm text-text font-bold -top-5 left-2 whitespace-nowrap">
                             Tahap Keempat
                        </span>
                    </div>
                </div>
            </div>
            <h2 className="text-center font-semibold text-xl ">Selesai</h2>
        </div>

    );
};

export default Roadmap;
