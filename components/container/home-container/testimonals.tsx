import { H_Tag } from "../smaller_container";
import { testimonals_card } from "@/components/data/testimonials_card";
import clsx from "clsx";
import { PiUserCircleBold } from "react-icons/pi";

export const Testimonials = () => {
  return (
    <section className="size-full flex pt-16 lg:pt-20 3xl:pt-[128] flex-col gap-[88] sm:px-10 lg:px-[90]  items-center justify-center ">
      <H_Tag className="sm:text-[58px]! max-sm:px-5 text-[28px]! text-center tracking-[-1%]">
        What others say <br className="xs:hidden" /> about me.
      </H_Tag>

      <div className="flex sm:flex-row flex-wrap flex-col lg:gap-0 gap justify-center items-center relative w-full max-sm:p-5 inset-0 lg:h-[1240px] h-fit py-0 max-sm:overflow-y-hidden 1xl:h-[1250px] 3xl:h-[1300px]!">
        {testimonals_card?.map((res, i) => (
          <div
            key={i}
            className={clsx(
              "rounded-2xl sm:rounded-4xl 3xl:border-5 border-3 xl:absolute  border-black lg:w-[380px] w-fit sx:w-[336px] 1xl:w-[400px]  size-fit 3xl:w-[480px]! 3xl:h-[620px]! m-auto  sm:py-15  py-10  3xl:py-20 px-8 lg:px-10 1xl:px-12 flex flex-col items-start justify-center text-left gap-8 3xl:gap-16",
              res.bg_color,
              res.text_color
            )}
          >
            <img
              src={res.quote}
              alt="quote"
              className="rotate-3 object-contain 3xl:size-auto size-14"
              loading="lazy"
            />
            <p className="font-normal text-lg sm:text-xl 3xl:text-2xl ">
              &quot;{res.text}&quot;
            </p>
            <hr className={clsx("w-full border 3xl:border-2")} />
            <div className="flex gap-1 sm:gap-2 font-bold font-clashGrotesk text-lg sm:text-xl 3xl:text-2xl items-center justify-center">
              <PiUserCircleBold className="text-[32px]  sm:font-black" />
              {res.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
