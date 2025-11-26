import { Project_Card } from "@/components/data/projects_card";
import React from "react";
import { Project_Tag } from "../smaller_container";
import { img_style, ol, span } from "@/components/style/style";
import clsx from "clsx";

export const Project3 = () => {
  return (
    <>
      <Project_Tag head_text="Business Goal: Improving Vaccination Adherence and Medical Record Accessibility Across Africa">
        The primary goal of VaxNow is to improve medical record accessibility
        while increasing vaccination adherence across Africa. The product aims
        to bridge the gap between parents, healthcare providers, and digital
        documentation. It seeks to reduce missed vaccinations, reduce
        misdiagnosis caused by poor documentation, and promote continuity of
        care across hospitals. By offering digital records, medication tracking,
        real time reminders, and quick access to verified medical professionals,
        VaxNow positions itself as a trusted, long term healthcare companion for
        families.
      </Project_Tag>
      <Project_Tag head_text="Forecast & Strategy">
        The long term strategy is built around accessibility, scalability, and
        integration. VaxNow aims to establish itself as the go to platform for
        vaccination and medication logging. Phase one focuses on Nigerian urban
        and semi urban cities. Phase two will involve strategic integration with
        government immunization programs. Phase three expands into private
        hospitals and schools. Our roadmap prioritizes a strong ecosystem
        approach. The more stakeholders adopt the system, the more valuable the
        platform becomes for everyone involved. families.
      </Project_Tag>{" "}
      <Project_Tag head_text="Project Goal">
        <span>
          The core goal was to design a simple, intuitive, and reliable digital
          platform where parents can track vaccinations, record medications,
          connect with doctors, and locate hospitals. The solution needed to
          reduce cognitive load, accommodate low digital literacy, and work even
          in low internet environments.
        </span>
        <span>
          The project also required designing a scalable database structure that
          hospitals can plug into. This allows medical records to remain
          accessible regardless of where the patient visits.
        </span>
        families.
      </Project_Tag>
      <Project_Tag head_text="User Persona">
        <img src={"/project3_2.png"} alt="user persona" className={img_style} />
      </Project_Tag>{" "}
      <Project_Tag head_text="Information Architecture">
        <img
          src={"/project3_3.png"}
          alt="information_architecture"
          className={img_style}
        />
      </Project_Tag>
      <Project_Tag head_text="Competitive Analysis">
        I compared existing child health apps, generic reminder apps, hospital
        EMR systems, and vaccination websites. I found that while some tools
        offered reminders and others offered documentation, few offered both in
        a unified experience. Even fewer catered to African parents or addressed
        local vaccination schedules. In regards to competition, it was clear
        parents wanted simplicity, reliability, and localized information, while
        hospitals wanted accuracy, digitization, and easy access to patient
        records.
      </Project_Tag>{" "}
      <Project_Tag head_text="Key Findings">
        <ol className={clsx(ol)}>
          <li>Parents lose physical vaccination cards frequently.</li>
          <li>Parents lose physical vaccination cards frequently.</li>
          <li>Medication tracking is a growing need among young families.</li>
          <li>
            Many parents want quick access to doctors at affordable rates.
          </li>{" "}
          <li>
            Hospitals need a shared record system to avoid mismatched data.{" "}
          </li>{" "}
          <li>
            Health content must be simple, trustworthy, and locally relevant.{" "}
          </li>
        </ol>
        <span>
          These findings informed every design decision made during the project.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Interactive Design & Accessibility">
        <span>
          My role focused on designing a website that clearly communicates the
          value of the VaxNow mobile app while guiding users toward download,
          subscription, or learning more about the service. Interaction design
          was centred on clarity, flow, and reducing cognitive effort for
          parents who may already be overwhelmed by childcare responsibilities.
          To achieve this, I crafted a layout that highlights core features
          through simple visual hierarchies. I used clean typography, friendly
          illustrations, and intuitive navigation to make the website feel
          approachable. Each section of the site moves the user from awareness
          to understanding to action.
        </span>
        <span>
          Accessibility was integrated from the start. High contrast colors were
          chosen to support low vision users. Buttons were designed with large
          tap areas for mobile browsing. Text was broken into digestible
          segments to support users with limited attention or lower literacy
          levels. Alt text was added to all images and infographics. The website
          also supports responsive viewing to ensure parents browsing on low end
          devices have a smooth experience. The goal was to ensure every visitor
          can understand the purpose of the platform, trust its reliability, and
          take the next step with confidence.
        </span>
      </Project_Tag>{" "}
      <Project_Tag head_text="Ideation & Prioritization">
        <span>
          During ideation, I explored multiple website structures, hero
          concepts, and storytelling approaches. Several layout directions were
          tested, including a product first layout, a parent centric emotional
          narrative, and a data driven educational format.
        </span>
        <span>
          After reviewing user research, I prioritised a storyline that blends
          trust, clarity, and emotional reassurance. Parents needed to feel that
          VaxNow is not just another app but a reliable companion. The website
          therefore emphasizes real problems, clear benefits, and visual
          walkthroughs of how the app simplifies their daily routines.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Overcoming Constraints">
        Designing for an audience with varied digital literacy meant simplifying
        every interaction on the website. One challenge was presenting medical
        information without making the site feel heavy or intimidating. I solved
        this by breaking complex features into small, friendly sections
        supported by icons and short explanatory text. Balancing informational
        depth with visual charm required thoughtful design decisions. Every
        section was refined repeatedly to maintain clarity, warmth, and trust.
      </Project_Tag>
      <Project_Tag head_text="Research to Reality">
        The research directly informed the website&apos;s structure and tone,
        addressing parental fears about losing paper vaccination cards by
        creating a clear visual guide to the digital vaccination card feature
        and prominently showcasing the automatic reminder system. Concerns about
        self-medication were resolved by adding a section explaining
        the medication tracker&apos;s dosage routine guidance, while user demand
        for trusted support led to a dedicated explanation of
        the DocChatfeature, including pricing. The website successfully became a
        bridge, also integrating a separate page focused on the hospital
        partnership vision to meet provider requests for a shared record system.
      </Project_Tag>
      <Project_Tag head_text="Home Page">
        <span className={span}>
          <p>
            <span>Clear Value Proposition:</span> The headline immediately
            states the core benefit: &quot;Never miss a vaccine&quot; with a
            &quot;vaccine tracker and reminder&quot; focus.
          </p>
          <p>
            <span>Problem-Solution Framing:</span> The design uses contrasting
            sections to highlight the pain point (&quot;Tired of losing track of
            your vaccinations?&quot;) and introduce the solution (&quot;A
            centralized platform...&quot;).
          </p>
          <p>
            <span>Affordable Pricing:</span> The page clearly displays three
            distinct pricing tiers for different user needs.
          </p>
          <p>
            <span>Trust & Credibility:</span> A dedicated section showcases
            logos of &quot;partners and collaborators&quot; to build trust.
          </p>
          <p>
            <span>Platform Availability:</span> The bottom section provides
            clear links/badges to download the app on both the Apple App Store
            and Google Play Store.
          </p>
        </span>
      </Project_Tag>
      <img src={"/project3_4.png"} alt="home_page" className={img_style} />
      <img src={"/project3_5.png"} alt="home_page2" className={img_style} />
      <img src={"/project3_6.png"} alt="home_page3" className={img_style} />
      <img src={"/project3_7.png"} alt="home_page4" className={img_style} />
      <Project_Tag head_text="Features Page">
        <span className={span}>
          <p>
            <span>Vaccination Appointment Reminders:</span> A section highlights
            the ability to &quot;Never miss a vaccination appointment
            again.&quot;
          </p>
          <p>
            <span>Medication Management:</span> A feature is dedicated to
            helping users &quot;Manage your medications effortlessly&quot; with
            easy setup.
          </p>
          <p>
            <span>Expert Medical Advice:</span> The app offers a mechanism to
            &quot;Get expert medical advice at your fingertips,&quot; likely via
            chat or consultation.
          </p>
          <p>
            <span>Secure Record Sharing:</span> Users can &quot;Securely share
            your health records with healthcare providers.&quot;
          </p>

          <p>
            <span>Location-Based Services: </span>A map-like graphic suggests a
            feature to &quot;Find the right clinic near you.&quot;
          </p>
          <p>
            <span>FAQ:</span> A dedicated section addresses common user
            questions about the product.
          </p>
        </span>
      </Project_Tag>
      <img src={"/project3_8.png"} alt="features_page1" className={img_style} />
      <img src={"/project3_9.png"} alt="features_page2" className={img_style} />
      <img
        src={"/project3_10.png"}
        alt="features_page3"
        className={img_style}
      />
      <Project_Tag head_text="Record Keeping">
        <span className={span}>
          <p>
            <span>Data Security:</span> A section prominently assures users
            about data privacy and security with a large visual metaphor of a
            key/lock.
          </p>
          <p>
            <span>Easy Data Sharing:</span> A dedicated section highlights the
            simplicity of sharing health data with doctors.
          </p>
          <p>
            <span>Secure Backup:</span> The platform offers a service
            to securely backup and restore health records.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/project3_11.png"}
        alt="recording_keeping1"
        className={img_style}
      />
      <img
        src={"/project3_12.png"}
        alt="recording_keeping1"
        className={img_style}
      />
      <Project_Tag head_text="Vaccine Education">
        <span className={span}>
          <p>
            <span>Video-Based Learning:</span> A large section is dedicated to
            learning about vaccines &quot;through engaging videos.&quot;
          </p>
          <p>
            <span>Search Input:</span> Users can search using any NGX stock or
            index fund ticker symbol (e.g., DANGCEM, GTCO, MTNN).
          </p>
          <p>
            <span>Premium Subscription:</span> A clear call-to-action
            (&quot;Upgrade&quot;) promotes KBS Invest Premium for advanced
            projections and unlimited AI queries.
          </p>

          <p>
            <span>Suggested Tickers:</span> Quick-access buttons are provided
            for frequently searched or popular NGX stocks (e.g., DANGCEM,
            AIRTELAFRI, BUACEMENT).
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/project3_13.png"}
        alt="vaccine_education"
        className={img_style}
      />{" "}
      <img
        src={"/project3_14.png"}
        alt="vaccine_education"
        className={img_style}
      />
      <Project_Tag head_text="Usability Testing">
        <span>
          To validate the clarity and usability of the VaxNow website, I
          conducted a small round of usability testing with five mothers. Each
          participant represented our primary audience group, making their
          feedback particularly valuable for refining the site.
        </span>
        <span>
          The test sessions focused on two core tasks. Navigating the website to
          locate the vaccine tracker information, and finding details about
          nearby hospitals. These tasks helped evaluate how intuitive the site
          structure was and whether users could quickly access high value
          features without guidance.
        </span>
        <span>
          Overall, the results were encouraging. Eighty percent of participants
          reported that the website was easy to navigate and that the flow
          between sections felt natural. However, forty percent expressed
          discomfort with the brightness of the red colour used in certain
          areas. This feedback highlighted the need to soften the visual tone to
          make the experience more welcoming and less intense for users.
        </span>
        <span>
          Based on these insights, I made two key adjustments. Firstly, I
          refined the colour palette to incorporate softer and more calming
          tones. Secondly, I introduced a sticky navigation bar to improve
          movement across sections, especially for users browsing on mobile
          devices. These refinements improved the clarity, and overall user
          experience of the website.{" "}
        </span>{" "}
      </Project_Tag>
      <Project_Tag head_text="Business Impact">
        <span>
          {" "}
          The redesigned website communicates the VaxNow value proposition with
          clarity and credibility, resulting in stronger user engagement and
          increased intent to download the app. The structured storytelling
          improved parent understanding of key features, and the accessibility
          improvements broadened the platform’s reach across different device
          types.
        </span>
        <span>
          By presenting VaxNow as a trustworthy medical companion rather than
          just another app, the website supports long term brand positioning. It
          empowers parents to make informed decisions, encourages hospital
          collaborations, and aids the team in pitching to government agencies
          and health organizations. The website now serves as an essential
          gateway into the VaxNow ecosystem.
        </span>
      </Project_Tag>
    </>
  );
};
