import "aos/dist/aos.css";
import AOS from "aos";
import {useEffect} from "react";

function Problem() {
    const trash = [
        {
            id: 1,
            img: "/botol.jpg",
        },
        {
            id: 2,
            img: "/botol2.jpg",
        },
        {
            id: 3,
            img: "/botol3.jpg",
        },
    ];
    useEffect(() => {
        AOS.init({
            delay: 300,
            duration: 800,
        });
    });
    return (
        <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh] mt-5 md:mt-10 mb-16">
            <div className="xl:max-w-5xl mx-auto flex items-center space-x-18 px-10 xl:px-0 flex-col space-y-10">
                <article>
                    <div className="text-center">
                        <h1 className="text-xl bg-primary-200 w-fit mx-auto font-semibold text-neutral-700 underline text-center md:text-[20px]">
                            Permasalahan
                        </h1>
                        <h1 className="text-[2rem] tracking-tight text-center md:text-[3rem] font-bold leading-[110%] mt-5">
                            Indonesia menghasilkan lebih dari <br/> <span
                            className="bg-primary-200 px-3">21,1 Juta Ton</span>
                            sampah botol plastik setiap tahunnya
                        </h1>
                        <p className="text-center text-xl mt-10">
                            Sampah plastik yang tidak terkelola dengan baik
                            berdampak negatif pada lingkungan, mengancam
                            kehidupan laut, mengurangi kualitas udara, dan
                            meningkatkan risiko perubahan iklim global.
                        </p>
                    </div>
                </article>
                <article className="overflow-hidden flex flex-col sm:flex-row gap-3 ">
                    {trash.map((item, index) => (
                        <img
                            key={index}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="800"
                            src={item.img}
                            className="h-56 rounded-lg shadow sm:h-48 lg:h-56 w-full object-cover"
                        />
                    ))}
                </article>
            </div>
        </div>
    );
}

export default Problem;
