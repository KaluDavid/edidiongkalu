import { H_Tag, P_Tag } from "../smaller_container";
import { scrolling_text } from "@/components/data/scrolling_text";

export const Services_Section = () => {
  return (
    <section className="flex flex-col gap-0  size-full">
      <div className="w-full  bg-[url('/bg-play.svg')] bg-cover sm:bg-contain bg-no-repeat bg-[#111111] text-[#FEFEFE]  sm:rounded-t-4xl   rounded-t-2xl bg-blend-color-dodge py-16 sm:py-20 3xl:py-[128] px-7 sm:px-12 lg:px-[90] flex  flex-col gap-12 3xl:gap-[88]">
        <H_Tag className="3xl:text-[91px]! font-bold leading-[140%]! text-[35px]! sm:text-5xl! lg:text-6xl! sm:font-normal sm:leading-[120%]! 3xl:w-[80%] lg:w-[70%] w-full ">
          I believe every product deserves to grow with intention. My design
          process is a mix of finding our what works, understanding what works,
          and building a strategy around the business with what works.
        </H_Tag>
        <P_Tag className="font-normal! ">
          It’s not just to design what looks good, but to create what works.
        </P_Tag>
      </div>

      {/* SCROLLING TEXT */}
      <div className="bg-cm-green border-b-3 xl:border-y-5 py-10 lg:py-20 3xl:py-[128] flex w-full gap-8 overflow-x-hidden  flex-nowrap ">
        {scrolling_text?.map((res, i) => (
          <span
            key={i}
            className="flex items-center text-[#FEFEFE] w-full inset-0 "
          >
            <img
              src={res.star}
              alt={res.text}
              width={74}
              height={74}
              className="mx-8 sm:size-10 lg:size-auto size-6"
            />
            <H_Tag className="leading-0 whitespace-nowrap w-full ">
              {res.text}
            </H_Tag>
          </span>
        ))}
      </div>
    </section>
  );
};
