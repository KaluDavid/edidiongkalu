import { Hero_Section } from "@/components/container/home-container/hero-section";
import { Services_Section } from "@/components/container/home-container/services_section";
import { Testimonials } from "@/components/container/home-container/testimonals";
import { Work_Section } from "@/components/container/home-container/work-section";

const Home = () => {
  return (
    <section className=" flex w-full pt-30 sm:pt-50 flex-col overflow-x-hidden">
      <Hero_Section />
      <Work_Section />
      <Services_Section />
      {/* <Testimonials /> */}
    </section>
  );
};

export default Home;
