import { Project_Card } from "@/components/data/projects_card";
import React from "react";
import {
  Findings_Box,
  H_Tag,
  P_Tag,
  Project_Tag,
  User_Story,
} from "../smaller_container";
import clsx from "clsx";
import { img_style, ol, span } from "@/components/style/style";

export const Project3 = ({ data }: { data: Project_Card[number] }) => {
  return (
    <>
      <Project_Tag head_text="Business Goal: Promoting Financial Responsibility Among Students">
        The business goal was to help students save with discipline by
        introducing a structured, user-friendly app tailored to their lifestyle.
        FundFlow empowers students to set target savings goals (e.g.,
        graduation, travel, emergency funds), lock funds to prevent impulse
        spending, collaborate through group savings for shared goals and
        track income, expenses, and debts in one place. The product’s vision was
        not just to help students save, it aimed to build lifelong financial
        responsibility.
      </Project_Tag>{" "}
      <Project_Tag head_text="Market Size & Growth">
        The student fintech market in Africa is expanding rapidly, driven by
        rising smartphone adoption and the demand for accessible financial
        tools. Over 25 million tertiary students across Africa manage money
        digitally, yet only 15% use structured savings tools. In Nigeria
        alone, youth fintech adoption grew by 45% in 2024, indicating strong
        potential for student-focused solutions. This gap represents an
        opportunity to position FundFlow as the leading savings companion for
        students.
      </Project_Tag>{" "}
      <Project_Tag head_text="Forecast & Strategy">
        The forecast centred on achieving steady adoption by partnering early
        with universities and student bodies to build trust and drive initial
        engagement. This strategy also relied heavily on using peer
        influence through features like Group Savings to boost ongoing
        engagement, alongside a referral reward system designed to encourage
        organic growth. The ultimate plan was for the app to grow with its users
        by gradually expanding into the young professional market as students
        transitioned after graduation, supporting them through their journey to
        financial independence.
      </Project_Tag>{" "}
      <Project_Tag head_text="Project Goal">
        As the designer, my goal was to create a platform that translates
        complex financial habits into simple, guided experiences, making every
        interaction feel friendly, goal-driven, and rewarding by focusing
        on simplicity in saving and goal-setting, transparency in tracking
        progress, and motivation through visual milestones and community
        support.
      </Project_Tag>{" "}
      <Project_Tag head_text="Research">
        <span>
          Fundflow was researched based on industry trends and validated through
          user interviews to fit the current job market where every penny
          matters.
        </span>
        <span>
          For this project, I utilized both qualitative and quantitative
          research methods. The quantitative approach involved distributing
          survey questionnaires to 28 undergraduate students, while the
          qualitative approach included conducting virtual interviews with 2
          undergraduates via Google Meet. These methods were carefully selected
          to ensure a comprehensive understanding of the problem and to gather
          valuable insights.{" "}
        </span>
      </Project_Tag>
      <Project_Tag head_text="Some Key Findings">
        <Findings_Box />
      </Project_Tag>
      <Project_Tag head_text="Competitive Analysis">
        <ul className={clsx("list-disc", ol, span)}>
          <li>
            <span>Piggyvest: </span>Focuses heavily on general savings plans but
            lacks education-focused features like graduation locks or
            student-specific budget categories.
          </li>
          <li>
            <span>Risevest: </span>Targets investment-oriented users but
            overlooks basic savings structures and day-to-day budgeting tools.
          </li>
          <li>
            {" "}
            <span>Cowrywise:</span> Emphasizes structured savings, yet it
            lacks social and group-saving features that attract younger,
            collaborative users.
          </li>
        </ul>
      </Project_Tag>
      <Project_Tag head_text="My Opportunity">
        <ul className={clsx("list-disc", ol, span)}>
          <li>
            <span>Lock Funds Feature:</span> Allows students to secure savings
            until graduation, solving impulse spending issues—a feature
            competitors lack.
          </li>
          <li>
            <span>Group Savings:</span> Promotes accountability and teamwork,
            ideal for younger, socially connected users.
          </li>
          <li>
            <span>Debt Management:</span> Tools to track and reduce debt,
            helping students prepare for life after graduation.
          </li>{" "}
        </ul>
      </Project_Tag>
      <Project_Tag head_text="User Stories">
        <span>
          After analyzing research insights and identifying key pain points, I
          converted user needs into actionable user stories. These stories
          helped guide the design process by focusing on what students truly
          wanted to achieve with the app. Each story represents a real scenario
          drawn from user interviews and surveys, ensuring the final product
          solves genuine problems and supports everyday financial goals.
        </span>

        <div className="flex sm:flex-row flex-col w-full justify-between  gap-8">
          <User_Story text="As a student, I want to lock funds until after graduation so I can avoid spending impulsively" />{" "}
          <User_Story text="As a student, I want to save with my friends toward a shared goal so we can stay accountable." />{" "}
          <User_Story text="As a student in debt, I want to track what I owe and plan repayments." />
        </div>
      </Project_Tag>
      <Project_Tag head_text="User Flow">
        This user flow shows the roadmap that guides users through the
        app&apos;s functionalities, ensuring a seamless and intuitive
        experience. This user flow will map out the onboarding and savings flow
      </Project_Tag>
      <Project_Tag head_text="Onboarding Flow">
        This user flow shows the roadmap that guides users through the
        app&apos;s functionalities, ensuring a seamless and intuitive
        experience. This user flow will map out the onboarding and savings flow
      </Project_Tag>
      <img
        src={"/prod3_img2.png.png"}
        alt="onboarding flow"
        className="size-full"
      />
      <Project_Tag head_text="Savings Flow"> </Project_Tag>
      <img
        src={"/prod3_img3.png.png"}
        alt="savings flow"
        className="size-full"
      />
      <Project_Tag head_text="Research Reality">
        <span>
          The core struggle students face with saving is easy access and lack of
          discipline, often driven by social spending and poor tracking. This
          research directly led to the development of the Locked Funds feature,
          offering a secure place for money that cannot be touched until a major
          milestone like graduation, directly addressing their need
          for long-term planning. Additionally, students reported saving better
          with social support, inspiring the Group Savings feature, which
          leverages peer accountability and teamwork to boost commitment toward
          shared goals.
        </span>
        <span>
          To make saving more achievable, the research revealed students
          struggled to budget for specific items like rent, food, or textbooks,
          leading to the creation of Target Savings, which allows them to track
          progress visually across separate financial &quot;pots.&quot; A final
          significant pain point was managing informal and quick-loan debt; this
          inspired the Debt Management feature, providing a structured way to
          list debts, set repayment schedules, and track progress to become
          debt-free. Complementing financial security, the app also includes
          a Job Portal to connect students with internships and work
          opportunities, supporting their savings goals by helping them earn
          income.
        </span>
        <span>
          These features were shaped directly from student pain points, turning
          real challenges into simple tools that make money management easier,
          clearer and more achievable.
        </span>
      </Project_Tag>
      <Project_Tag head_text="On Boarding">
        <span className={clsx("list-disc", span)}>
          <p>
            {" "}
            <span>OTP Verification:</span> Security is established through
            a One-Time Password (OTP) sent to the registered email address.{" "}
          </p>
          <p>
            <span>School Information:</span> The app collects academic details,
            including the school name, current level, and start/graduating
            years, since it is tailored to students.
          </p>
          <p>
            <span>Identity Upload:</span> Users are required to upload an image
            of their identification (ID) document.
          </p>
          <p>
            <span>Financial Goal Definition:</span> Users define their financial
            goals by ticking applicable categories (e.g., save for a big
            purchase, improve financial literacy).
          </p>
          <p>
            <span>Future Savings Target:</span> Users must specify a desired
            savings amount they would like to have in a set timeframe (e.g.,
            three years).
          </p>
          <p>
            <span>Transaction PIN:</span> A mandatory four-digit Transaction
            PIN is created to secure future transactions.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod3_img4.png"}
        alt="onboarding flow"
        className={clsx(img_style)}
      />
      <Project_Tag head_text="Dashboard">
        <span className={clsx("list-disc", span)}>
          <p>
            <span>Onboarding Guide:</span> A prominent &quot;Onboarding
            Video&quot; is displayed to guide new users.
          </p>
          <p>
            <span>Total Balance Summary:</span> The user&apos;s &quot;Total
            balance&quot; is visible with an immediate link to &quot;View
            Savings.&quot;
          </p>
          <p>
            <span>Instant Access to Key Features: </span> Quick-access cards are
            provided for core functions like Lock Funds, Target Savings,
            and Debt Management.
          </p>
          <p>
            <span>Incentivized Savings:</span> A &quot;Discount & Deals&quot;
            section promote saving by offering deals from partners.
          </p>
          <p>
            <span>Educational Resources:</span> A &quot;Finance Resources&quot;
            section provides links to learning materials on topics like
            &quot;Budgeting and Savings&quot; and &quot;Financial Goal
            Settings.&quot;
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod3_img5.png"}
        alt="onboarding flow"
        className={clsx(img_style)}
      />
      <Project_Tag head_text="Savings Plan">
        <span className={clsx("list-disc", span)}>
          <p>
            <span>Dedicated Savings Dashboard:</span> The main screen provides a
            comprehensive overview of the total savings balance and different
            plan categories (Lock Funds, Target Savings, Debt Management).
          </p>
          <p>
            <span>Lock Funds:</span> Users can secure savings long-term toward a
            specific target with a visual progress bar.
          </p>{" "}
          <p>
            <span>Target Savings:</span> Users can create separate savings pots
            with visual tracking toward specific goals (e.g., Rent).
          </p>
          <p>
            <span>Debt Tracker/Management: </span>A dedicated feature helps
            users track their current debt balance with a visual progress
            indicator.
          </p>
          <p>
            <span>Group Savings:</span> A feature allows users to create or join
            groups to save collectively, promoting social accountability.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod3_img6.png"}
        alt="onboarding flow"
        className={clsx(img_style)}
      />
      <Project_Tag head_text="Job Board">
        <span>
          The job feature allows users to create a job profile that matches
          their interests, making it easier to find suitable jobs. Users can
          apply for jobs directly through the app and save jobs to apply for
          later.
        </span>
      </Project_Tag>
      <img
        src={"/prod3_img7.png"}
        alt="onboarding flow"
        className={clsx(img_style)}
      />
      <Project_Tag head_text="Other Screens">
        <span>
          The account page lets users do various things in the app, like
          changing their password and PIN, agreeing to the terms and conditions,
          checking frequently asked questions, and finding ways to contact the
          company.
        </span>
      </Project_Tag>
      <img
        src={"/prod3_img8.png"}
        alt="onboarding flow"
        className={clsx(img_style)}
      />
      <Project_Tag head_text="User Testing">
        <span>
          {" "}
          The user testing for this application was conducted with four
          participants via remote usability testing sessions lasting 45-60
          minutes each, utilizing Google Meet and TLDV for data collection. The
          methodology focused on observing user behavior, recording
          difficulties, and gathering feedback through post-test interviews and
          surveys. Key metrics for evaluation included task completion rates,
          time taken, and error rates across critical functionalities like
          the Onboarding Experience, Lock Funds Feature, Target Savings, Group
          Savings, and overall Navigation and Usability.
        </span>
        <span>
          Key findings revealed that while the Onboarding Experience was largely
          successful, with 90% completion, the explanations for the Lock
          Funds feature were unclear. Similarly, users appreciated the Group
          Savings transparency but immediately desired a basic chat function for
          better collaboration and communication among group members.
          For Navigation and Usability, some users found the toggle icon in the
          account page confusing.
        </span>
        <span>
          Based on these findings, specific recommendations were made to improve
          the application. To clarify the Lock Funds feature, an explainer video
          or tooltip should be added during onboarding. For Group Savings,
          integrating a basic chat function is recommended to enhance teamwork.
          Finally, the navigation issue can be resolved by making the confusing
          account page toggle icon more pronounced so its clickable function is
          instantly recognized by users. I ensured the implement these issues
          from the testing.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Looking Back">
        <span>
          Designing FundFlow taught me that financial design is about empathy.
          Students don’t just need tools; they need guidance, motivation, and
          trust. By focusing on their real challenges, I was able to create an
          app that’s practical, human, and impactful. FundFlow proves that a
          well-designed product can make saving feel simple, social, and
          achievable.
        </span>
      </Project_Tag>
    </>
  );
};
