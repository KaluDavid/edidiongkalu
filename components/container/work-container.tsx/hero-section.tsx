import React from "react";
import { Card, CD, H_Tag, P_Tag } from "../smaller_container";
import clsx from "clsx";
export const Hero_Section = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 font-semibold text-lg text-center">
      <P_Tag className="leading-[150%]">PORTFOLIO</P_Tag>
      <H_Tag className=" max-sm:text-[35px]! w-full ">
        Projects that bridge <br /> business goals and <br />
        human needs.
      </H_Tag>
    </div>
  );
};
