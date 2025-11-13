import { Project_List } from "@/components/container/smaller_container";
import { Hero_Section } from "@/components/container/work-container.tsx/hero-section";

const Work = () => {
  return (
    <section className="flex flex-col justify-center pt-10 sm:pt-20 size-full  overflow-x-hidden items-center gap-16 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative ">
      <Hero_Section />
      <Project_List />{" "}
    </section>
  );
};

export default Work;
