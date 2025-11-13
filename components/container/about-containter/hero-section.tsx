import React from "react";
import { Card, CD, H_Tag, P_Tag } from "../smaller_container";
import clsx from "clsx";
export const Hero_Section = () => {
  const img =
    "1xl:w-[300px]! xl:w-[260px] mx-auto sm:absolute xl:h-[360px] 1xl:h-[400px]! 3xl:w-[347px]! 3xl:h-[457px]! w-[328px] h-[442px] sm:w-[347px] sm:h-[457px] object-cover sm:border-4 3xl:border-5 border-3 border-black rounded-2xl sm:rounded-4xl";
  return (
    <div className="flex flex-col size-full justify-center items-center gap-20 ">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 font-semibold text-lg text-center">
        <H_Tag className=" max-sm:text-[35px]! w-full ">
          The Curious Mind
          <br />
          Behind the Work
        </H_Tag>
        <P_Tag className="leading-[150%]">
          Always asking why, until the <br className="sm:hidden" /> answers
          start to look beautiful.
        </P_Tag>
      </div>

      <div className="flex w-full flex-col sm:flex-wrap  sm:flex-row justify-between xl:justify-center items-center  relative sm:h-[910px] xl:h-[610px] 3xl:h-[671px] ">
        <div className="flex flex-col flex-col-reverse">
          <Card className="bg-selections sm:absolute text-white px-8 py-12 3xl:px-12 p-8 sm:w-[347px] w-[324px]  xl:h-auto h-[457px] xl:w-[330px] 3xl:w-[427px] rotate-2 xl:-rotate-2 3xl:left-10 lg:left-10 xl:top-auto top-0 xl:bottom-0 mx-auto z-10 sm:z-auto sm:mt-auto -mt-5">
            <img
              src={"/quote.svg"}
              alt="quote"
              className="rotate-3 object-contain 3xl:size-auto size-14"
              loading="lazy"
            />
            <H_Tag className="text-[35px]! sm:text-4xl! 3xl:text-[46px]!  leading-[140%]! pt-15">
              Firm believer that small details always make big differences.
            </H_Tag>
          </Card>

          <img
            src={"/eddy1.jpg"}
            alt="quote"
            width={347}
            height={457}
            className={clsx(
              "-rotate-4 top-0 xl:top-10 xl:right-auto right-0 lg:right-10 xl:left-75 3xl:left-100 ",
              img
            )}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col-reverse">
          <Card className="bg-cm-yellow sm:absolute mx-auto  sm:p-6 p-8 xl:pl-auto sm:*:ml-3 xl:*:ml-auto xl:px-6 3xl:px-8 w-[330px] sm:w-[347px] xl:w-[300px] 1xl:w-[320px] 3xl:w-[400px] h-[447px] xl:h-[440px] 3xl:h-[554px] relative xl:bottom-auto bottom-0 xl:top-10 -rotate-5 xl:rotate-5 xl:left-auto left-0 xl:right-65 1xl:right-75! 3xl:right-100! sm;z-auto z-20 -mt-5 sm:mt-auto">
            <H_Tag className="text-4xl! 3xl:text-[46px]! leading-[140%]! pb-4 ">
              Core Values
            </H_Tag>
            <CD>
              Always ask <br /> why.
            </CD>
            <CD className="-rotate-5 bottom-35 1xl:bottom-33 3xl:bottom-43 left-14">
              <span className="whitespace-nowrap  3xl:pr-2">Keep things</span>{" "}
              <br /> simple.
            </CD>
            <CD className="z-10 bottom-8 rotate-10">
              Design with <br />
              intention.
            </CD>
          </Card>
          <img
            src={"/eddy.png"}
            alt="quote"
            width={347}
            height={457}
            className={clsx(
              "xl:-rotate-4 -rotate-4 sm:rotate-4 right-0 3xl:right-10 xl:bottom-auto bottom-0 xl:top-0 sm:z-auto z-10",
              img
            )}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
