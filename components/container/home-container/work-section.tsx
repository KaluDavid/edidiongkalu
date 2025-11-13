import Image from "next/image";
import React from "react";
import { H_Tag, Project_Card, Project_List } from "../smaller_container";
import { projects_card } from "@/components/data/projects_card";

export const Work_Section = () => {
  return (
    <section className="w-full flex pt-6 lg:pt-8 pb-16 lg:pb-20 3xl:pb-32 flex-col gap-8 px-5 sm:px-10 lg:px-[90]">
      <div className="bg-cm-yellow border-3 sm:border-4 3xl:border-5 border-black sm:bg-[url('/bg-play.png')] bg-[url('/bg.svg')] bg-cover lg:bg-contain bg-no-repeat sm:bg-right  bg-top flex rounded-2xl sm:rounded-4xl min-h-[274px]  3xl:p-18 p-8 sm:p-12 relative">
        <H_Tag className="text-[43px]! sm:text-6xl! 3xl:text-[91px]!  3xl:leading-[120%] lg:flex lg:flex-col relative">
          <span>They say Curiosity killed the </span>
          <span>cat, but for me, Curiosity</span>{" "}
          <span className=" gap-4 items-end lg:flex ">
            makes the{" "}
            <span className="max-sx:whitespace-nowrap">business sell.</span>
            <img
              src={"/brown-star.png"}
              alt="asterisk"
              width={84}
              height={84}
              className="object-contain right-3 bottom-20  size-10 sm:size-16 3xl:size-[84px] sm:static absolute sm:mx-2"
            />
          </span>
        </H_Tag>
      </div>
      <Project_List />{" "}
    </section>
  );
};
{
  /* <span className="bg-[url('/brown-star.png')] px-55 py-43  bg-red-300 bg-no-repeat bg-center" /> */
}
