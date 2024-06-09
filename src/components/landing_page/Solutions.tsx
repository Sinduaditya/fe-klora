import {Section} from "./index.jsx";

export default function Solutions() {
    const sections = [
        {
            id: 1,
            subHeading: "#Emission Calculator",
            heading: "Plastic Bottle Emission Calculator",
            desc: "Kalkulator Klora akan menghitung dampak lingkungan dari penggunaan botol plastik. Dengan input jumlah dan jenis botol yang anda gunakan, Anda akan mendapatkan perkiraan emisi plastik yang anda hasilkan.",

            img: "Calculator.png",
        },
        {
            id: 2,
            subHeading: "#Swap",
            heading: "Swap Utility to Crypto Coin",
            desc: "Setiap melakukan pengumpulan botol bekas ke Volunteer, anda akan mendapatkan token Utility yang nantinya dapat di tukar menjadi Currency Klora (token KLO). Token tersebut dapat anda gunakan di market Currency.",
            img: "Swap.png",
        },
        {
            id: 3,
            subHeading: "#Bag & Skin",
            heading: "Leveling Up",
            desc: "Setelah mendaftar, anda akan mendapatkan BAG Level 1. Namun, anda dapat naik level setelahnya dengan membeli BAG dan juga berbagai skin-nya.",
            img: "NFT.png",
        },
        {
            id: 4,
            subHeading: "#Kemana botolnya ?",
            heading: "Klora Recycle",
            desc: "Botol-botol yang telah diserahkan akan disortir dan diproses menjadi biji plastik yang dapat digunakan kembali. Melalui program daur ulang, Klora berkomitmen untuk mengurangi limbah plastik dan mendorong ekonomi yang berkelanjutan.",
            img: "Recycle.png",
        },
    ];




    return (
        <>
            <div className="mt-24 md:pt-5 w-full text-text">
                <h1 className="text-[2rem] tracking-tight text-center md:text-[3rem] font-bold text-primary-700 leading-[110%] mt-5">
                    Our Solutions
                </h1>

                <div className="xl:max-w-5xl mx-auto space-y-14 px-10 xl:px-0">
                    {sections.map((section) => (
                        <Section key={section.id} data={section}/>
                    ))}
                </div>
            </div>
        </>
    )
}
