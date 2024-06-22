import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });

  return (
    <div className="w-full text-text font-outfit md:pt-[1vh] mb-12">
      <div className="xl:max-w-5xl mx-auto grid lg:flex lg:flex-row lg:justify-between gap-4 items-center px-10 xl:px-0 w-fit ">
        <article className="grid gap-2 order-2 lg:order-1  text-center lg:text-left mx-auto ">
          <h1 className="text-2xl md:text-4xl lg:text-7xl p-1  font-bold text-neutral-900 leading-[110%] tracking-tigh">
            Tukar botol sekali pakai <br /> menjadi{" "}
            <span className="bg-primary-200">Token Kripto. </span>
          </h1>
          <p className="font-outfit font-normal text-neutral-600 text-md md:text-2xl leading-[110%]">
            Mulai langkah awalmu dalam mengurangi emisi karbon dan menjaga Iklim{" "}
            <span className=""> bersama klora</span>
          </p>
          <div className="mt-5">
            <ScrollLink
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                to="howItWorks"
                className="w-fit py-3 px-5 text-white font-semibold bg-primary-700 hover:bg-primary-800 rounded-full"
            >
              Coba sekarang
            </ScrollLink>
          </div>
        </article>
        <img
          src="/Hero.png"
          alt="Hero Image"
          width={495}
          height={467}
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-[250.5px] h-[230px] md:w-[495px] md:h-[467px] lg:order-2  mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
