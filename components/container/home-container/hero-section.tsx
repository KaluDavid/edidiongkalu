import { LG, P_Tag, SMALL } from "../smaller_container";
import { Custom_Btn } from "../custom-button/custom-btn";

export const Hero_Section = () => {
  return (
    <section className="flex flex-col w-full items-center gap-6 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative ">
      <div className="flex w-full lg:flex-row flex-col sm:justify-between sm:items-end  sm:gap-0 gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 font-semibold text-lg">
          <P_Tag>What is it that I do?</P_Tag>
          <LG />
          <SMALL />
        </div>
        <Custom_Btn className="z-30">
          <img
            src={"/EnvelopeOpen.svg"}
            width={32}
            height={32}
            className="2xl:size-auto size-[22px] "
            loading="lazy"
          />{" "}
          Send me an email
        </Custom_Btn>
      </div>
      <fieldset className="absolute max-sm:right-0 lg:left-110 3xl:top-60 top-60 3xl:left-155 sm:top-95 xl:top-55  flex justify-center items-center z-10 ">
        <img
          loading="lazy"
          src={"/thoughts.png"}
          width={342}
          height={308}
          alt="thoughts"
          className="relative sm:block hidden 3xl:size-auto size-[300px]"
        />
        <img
          src={"/thought.png"}
          loading="lazy"
          width={248}
          height={211}
          alt="thoughts"
          className="relative sm:hidden w-58 h-fit "
        />
        <div className="absolute max-sm:left-16 whitespace-nowrap -rotate-30 sm:-rotate-15 flex justify-center gap-1 items-center ">
          <span className="p-1.5 bg-text-color rounded-full " />
          <span className="sm:text-lg text-base  3xl:text-2xl font-semibold ">
            Available for Projects
          </span>
        </div>
      </fieldset>
      <img
        src={"/hero_img.png"}
        width={1520}
        height={1036}
        alt="mic"
        className="relative bg-clip-border  max-sm:h-[480px] sm:w-screen 3xl:h-[1036] object-cover sm:rounded-4xl rounded-2xl lg:object-cover border-3 "
        loading="lazy"
      />
    </section>
  );
};
