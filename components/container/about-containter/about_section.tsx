import { P_Tag } from "../smaller_container";
import clsx from "clsx";

export const About_Section = () => {
  return (
    <div className="flex size-full lg:flex-row flex-col justify-between items-center gap-20 ">
      <P_Tag className="flex flex-col gap-4 *:leading-[150%]">
        <span>
          I’m Edidiong Kalu, a product designer with a soft spot for strategy
          and storytelling. I help product owners see possibilities they didn’t
          know existed, and turn them into designs that sell, scale, and make
          people feel seen.
        </span>
        <span>
          Curiosity is my secret ingredient. It’s what drives my research,
          shapes my ideas, and keeps my designs grounded in real human needs.
          Whether I’m mapping user journeys or refining a button state, I design
          with one goal in mind - to make growth feel simple, intentional, and
          human.
        </span>
        <span>
          Over the years, my work has revolved around understanding people;
          their habits, frustrations, and what truly makes them engage. From
          uncovering insights through research to shaping design systems that
          bring ideas to life, I’ve learnt that great products are born from
          listening first and designing second. Every project has deepened my
          curiosity for how design influences behaviour and how small,
          intentional changes can transform the way people experience a product.
        </span>
      </P_Tag>
      <fieldset className="flex flex-col min-w-[30%] h-fit  relative">
        <img
          src={"/edd.jpg"}
          alt="quote"
          width={421}
          height={554}
          className={clsx(
            "rotate-5  object-contain sm:border-4 3xl:border-5 border-3 border-black rounded-2xl sm:rounded-4xl w-[421px] h-fit"
          )}
          loading="lazy"
        />
        <img
          loading="lazy"
          src="/star_blue.svg"
          alt="blue star"
          width={105}
          height={105}
          className="absolute -bottom-10 -left-5 lg:left-0  size-22.5 sm:size-auto"
        />
      </fieldset>
    </div>
  );
};
