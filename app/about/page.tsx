import { About_Section } from "@/components/container/about-containter/about_section";
import { Hero_Section } from "@/components/container/about-containter/hero-section";
import { Resume_Section } from "@/components/container/about-containter/resume-section";

const About = () => {
  return (
    <section className="flex flex-col justify-center pb-10 sm:pb-20 pt-30 sm:pt-50 size-full  overflow-x-hidden items-center gap-16 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative ">
      <Hero_Section />
      <About_Section />
      <Resume_Section />
    </section>
  );
};

export default About;
