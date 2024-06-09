
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


function Section({ data }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });

  return (
    <div
      className={`w-full text-text flex ${
        data.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col items-center md:justify-around md:space-x-12 font-outfit`}
    >

      <img
        src={`/${data.img}`}
        width={452.5}
        height={541}
        alt={data.img}
        data-aos="zoom-in-up"
        data-aos-duration={500}
        className="object-contain xl:w-[452.5px] xl:h-[541px] w-[276.3px] h-[305px] md:w-[350px] md:h-[400px]"
      />
      <article
          className="flex flex-col space-y-6 pl-2 xl:mt-0 mt-8 xl:items-start text-center md:text-start items-center md:items-start">
        <h2 className="text-[20px] font-bold uppercase text-text border-b-4 border-primary-700">
          {data.subHeading}
        </h2>

        <h1 className="leading-[110%] font-bold text-[3rem] xl:text-[4rem] text-text">
          {data.heading}
        </h1>
        <p className="text-xl lg:pr-7 pr-7 mt-10">
          {data.desc}
        </p>
      </article>
    </div>
  );
}

export default Section;
