import React from "react";
import { H_Tag } from "../smaller_container";
import clsx from "clsx";
const scrolling_text = [
  { text: "HCI" },
  { text: "Fintech" },
  { text: "Edutech" },
  { text: "Healthtech" },
  { text: "Edidiong Kalu" },
];

const style = "py-10 lg:py-20 3xl:py-[128]";
export const Carousel = () => {
  return (
    <div className="carousel border-b-3 xl:border-b-5  ">
      <div className="group pr-[12.5em] sm:pr-[26em] whitespace-nowrap ">
        {scrolling_text.map((it, i) => (
          <div
            key={i}
            className={clsx("card flex items-center shrink-0", style)}
          >
            <img
              src="/starr.svg"
              alt="star"
              width={72}
              height={72}
              className=" sm:size-10 lg:size-auto size-8"
            />
            <H_Tag className="leading-0  ">{it.text}</H_Tag>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className="group pr-[12.5em] sm:pr-[26em] whitespace-nowrap"
      >
        {scrolling_text.map((it, i) => (
          <div
            key={i}
            className={clsx("card flex items-center shrink-0", style)}
          >
            <img
              src="/starr.svg"
              alt="star"
              width={72}
              height={72}
              className=" sm:size-10 lg:size-auto size-8"
            />
            <H_Tag className="leading-0  ">{it.text}</H_Tag>
          </div>
        ))}
      </div>
    </div>
  );
};
