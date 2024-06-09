import { useEffect } from "react";

// import AOS from "aos";
import "aos/dist/aos.css";

function Card({
  data,
}: {
  data: { id: number; img: string; testi: string; name: string };
}) {
  useEffect(() => {
    // AOS.init({
    //   delay: 300,
    //   duration: 800,
    // });
  });
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={500 * data.id}
      className="flex flex-col bg-card hover:bg-[#2B315A] group hover:scale-105 transition-all max-w-sm space-y-8 rounded-[30px] font-outfit items-center px-10 py-16 relative md:mt-0 mt-5"
    >
      <img
        src={`/testimonials/${data.img}`}
        width={100}
        height={100}
        alt={data.name}
        className="rounded-full absolute -top-10 right-0 left-0 mx-auto"
      />

      <article className="text-center">
        <p className="text-text font-[20px]">{data.testi}</p>
        <p className="font-[600] leading-[27.5px] text-subText text-[18px] uppercase mt-5">
          {data.name}
        </p>
      </article>
    </div>
  );
}

export default Card;
