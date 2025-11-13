import clsx from "clsx";
import { Custom_Btn } from "../custom-button/custom-btn";
import { H_Tag, P_Tag } from "../smaller_container";
import { resume } from "@/components/data/resume";

export const Resume_Section = () => {
  return (
    <div className="flex size-full flex-col  gap-20 pt-10">
      <hr className={clsx("w-full border 3xl:border-2  text-black")} />
      {resume?.map((res, i) => (
        <div
          key={i}
          className="flex sm:flex-row flex-col items-start w-full justify-between gap-15 sm:gap-20"
        >
          <H_Tag className="sm:text-[26px]! text-xl! max-sm:font-medium! whitespace-nowrap leading-0!">
            {res.date}
          </H_Tag>
          <div className="flex flex-col gap-2">
            <H_Tag className="flex flex-col gap-2 ">
              <span className="text-[35sm:text-5xl! leading-0">{res.company}</span>
              <span className="text-[26px]! pt-2">{res.location}</span>
            </H_Tag>
            <P_Tag>{res.text}</P_Tag>
          </div>
        </div>
      ))}
      <hr className={clsx("w-full border 3xl:border-2  text-black")} />
      <Custom_Btn className="w-fit">
        <img
          src={"/Files.svg"}
          width={32}
          height={32}
          className="2xl:size-auto size-[22px] "
        />
        Download my CV
      </Custom_Btn>
    </div>
  );
};
