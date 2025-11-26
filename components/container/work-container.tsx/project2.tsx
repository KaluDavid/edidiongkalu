import { Project_Card } from "@/components/data/projects_card";
import React from "react";
import { H_Tag, P_Tag, Project_Tag, User_Story } from "../smaller_container";
import clsx from "clsx";
import { img_style, ol, span } from "@/components/style/style";

export const Project2 = () => {
  return (
    <>
      <img src={"/project2_2.png"} alt="project image" className={img_style} />
      <Project_Tag head_text="Business Goal: Simplifying Estate and Utility Payments in Nigeria">
        The goal was to digitize the fragmented process of estate payments in
        Nigeria and to simplify how communities interact with utilities. The
        product needed to serve two audiences: everyday users managing personal
        bills and estate administrators handling collective payments for
        services like security, waste, water, and electricity. KoboSmart would
        reduce administrative errors, speed up settlements, and improve
        transparency between residents, admins, and security teams.
      </Project_Tag>
      <Project_Tag head_text="Market Size & Growth">
        Nigeria’s urban estate communities are expanding fast. According to
        market data, more than 2.5 million households now live in structured
        residential estates. Yet, most of these communities still rely on manual
        payment methods. This gap represents a growing market for digital estate
        tools. With rising smartphone adoption, KoboSmart could become the
        standard for community-based digital finance.
      </Project_Tag>
      <Project_Tag head_text="Forecast & Strategy">
        Our forecast focused on steady adoption within gated communities and
        private estates. The strategy was first to build trust by making bill
        management seamless for residents. Then empower estate admins with tools
        that feel professional but not intimidating. This approach positioned
        KoboSmart as more than a payment app. It became a digital companion for
        modern estates.
      </Project_Tag>
      <Project_Tag head_text="Project Goal">
        My role as lead designer was to shape how people experienced this
        product. I needed to translate administrative complexity into simple,
        guided workflows. The goal was to design a mobile-first experience for
        residents and admins, supported by a responsive web system for super
        admins and non-resident users paying public bills.
      </Project_Tag>{" "}
      <Project_Tag head_text="Research">
        <span>
          We began with contextual interviews in five estates across Lagos. We
          observed how residents tracked payments and how admins managed
          records. Most used a combination of receipts, phone notes, and
          WhatsApp groups. Security teams confirmed that visitor verification
          was verbal, based on recognition, and prone to error.
        </span>
        <span>
          This discovery shaped our guiding question:“How can we simplify estate
          payments without disrupting existing trust structures?”
        </span>
      </Project_Tag>{" "}
      <img src={"/prod1_img2.png"} alt="research" className={img_style} />
      <Project_Tag head_text="Competitive Analysis">
        <span>
          We began with contextual interviews in five estates across Lagos. We
          observed how residents tracked payments and how admins managed
          records. Most used a combination of receipts, phone notes, and
          WhatsApp groups. Security teams confirmed that visitor verification
          was verbal, based on recognition, and prone to error.
        </span>
        <span>
          This discovery shaped our guiding question:“How can we simplify estate
          payments without disrupting existing trust structures?”
        </span>
      </Project_Tag>
      <Project_Tag head_text="Key Findings">
        <ol className={clsx(ol, span)}>
          <li>
            <span>User Experience Gaps:</span> Most competitor platforms focus
            heavily on functionality without considering how intuitive
            navigation should feel. Users often have to click through several
            screens to complete actions that should take seconds. KoboSmart
            bridges this by designing shorter, more predictable flows.
          </li>

          <li>
            {" "}
            <span>Fragmented Solutions:</span> Sesa excels at communication and
            dues tracking, while Clannit handles gate access control. However,
            neither offers a comprehensive solution that manages both finances
            and community operations in one environment. KoboSmart fills this
            gap by providing a unified ecosystem for all estate-related needs.
          </li>

          <li>
            <span>Lack of Automation and Transparency:</span> Competing
            platforms rely on manual updates or external confirmation steps for
            dues and settlements. KoboSmart automates recurring payments, ledger
            updates, and settlements, which improves accountability between
            residents and admins.
          </li>
          <li>
            <span>Security and Role Limitations:</span> Clannit focuses mainly
            on visitor management, while Sesa lacks role differentiation
            entirely. KoboSmart introduces layered roles: Resident, Admin,
            Security, and Super Admin, ensuring that each user type sees only
            what they need, minimizing confusion and maintaining data security.
            Unrefined Reporting Systems: Reporting in competitor products is
            basic or non-existent. KoboSmart’s analytics and settlement features
            allow estate admins and super admins to understand payment patterns,
            outstanding balances, and estate performance in real time.
          </li>
        </ol>
        <span>
          Competitor research reinforced a clear design direction: simplicity,
          integration, and clarity must drive KoboSmart’s product experience.
          The market needed an estate management tool that doesn’t just
          function, it has to feel effortless to use. KoboSmart’s approach was
          to make estate life easier, not more complicated.
        </span>
      </Project_Tag>
      <Project_Tag head_text="User Stories">
        After gathering insights from user interviews and analyzing estate
        management behaviours, we defined the key personas that shaped the
        KoboSmart experience. Each user type (residents, estate admins, and
        security) interacts with the system differently, so their stories helped
        us translate needs into actionable design features. These narratives
        guided decisions on navigation, hierarchy, and workflow, ensuring every
        screen supported a real goal.
        <div className="flex sm:flex-row flex-col w-full justify-between  gap-8">
          <User_Story text="As a resident, I want to view and pay my estate bills easily, so I can stay compliant without stress." />{" "}
          <User_Story text="As an estate admin, I want to track which residents have paid or are owing, so I can maintain transparency and accountability." />{" "}
          <User_Story text="As a security officer, I want to confirm the payment status of residents, so I can enforce access policies fairly." />
        </div>
      </Project_Tag>
      <Project_Tag head_text="Interaction Design & Accessibility">
        <ol className={clsx(ol, span)}>
          <li>
            <span>Seamless Navigation: </span> Navigation had to
            be effortless across mobile and web. I tailored experiences for
            estate admins, residents, and security officers, focusing
            on intuitive hierarchies and consistent visual cues to minimize
            learning time.
          </li>

          <li>
            <span>Accessibility Standards:</span> KoboSmart's design
            prioritized accessibility and user confidence, not just aesthetics.
            I adhered strictly to WCAG guidelines, ensuring every element, from
            colour contrast to button placement, reinforced the principle that
            clarity builds trust.
          </li>

          <li>
            <span>Security Features:</span> Security and privacy were central.
            Features like BVN/NIN verification, encrypted transactions, and
            consent modals were seamlessly integrated. The design ensured users
            always understood data usage, reinforcing trust in the system.
          </li>
          <li>
            <span>Business-Centric Design:</span> The design philosophy
            was business-centric, balancing functionality with financial
            responsibility. The interface allowed admins to clearly monitor
            settlements, track bills, and analyze collections, prioritizing
            operational efficiency.{" "}
          </li>
        </ol>
        <span>
          Through iterative refinement and tester feedback, KoboSmart evolved
          into a platform that not only performs well but also feels intuitive
          for first-time users, efficient for returning users, and compliant
          with global accessibility standards.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Ideation & Prioritization">
        <span>
          After consolidating the findings from our user research, the next
          challenge was figuring out what to build first. KoboSmart had the
          potential to serve many user types (residents, estate administrators,
          security officers, and super admins) each with their own needs. To
          avoid spreading efforts too thin, the product team and I organized a
          design workshop to brainstorm features that aligned with both user
          pain points and business goals.
        </span>
        <span>
          We began by mapping out every idea on a whiteboard. Nothing was
          off-limits at this stage. Some suggestions focused on streamlining
          bill payments for residents, others explored data analytics for estate
          admins, while a few revolved around community-driven features like
          guest access and maintenance requests. Once we had all ideas visible,
          we needed a framework to bring structure to this creative chaos.{" "}
        </span>
      </Project_Tag>
      <img src={"/prod1_img3.png"} alt="research" className="size-full" />
      <Project_Tag head_text="Overcoming Constraints">
        <ol className={clsx(ol, span)}>
          <li>
            <span>Team Alignment:</span> One of the biggest challenges was
            maintaining alignment across a distributed team of designers,
            developers, and business stakeholders. Everyone had different
            priorities, and bringing those perspectives together required
            frequent communication and collaboration. It was not enough to
            simply share designs. We had to ensure that each decision reflected
            both user needs and technical realities.
          </li>

          <li>
            <span>Role Consistency:</span> Residents, estate admins, and
            security users all interacted with the app differently, yet the
            experience needed to feel consistent. We approached this by defining
            clear interaction boundaries for each group. Residents focused on
            payments and community updates, security users handled verification
            tasks, and estate admins oversaw analytics and management. Every
            interface had to feel intuitive on its own while still belonging to
            the same product ecosystem.
          </li>

          <li>
            <span>Technical Constraints:</span> Integrating real-time payment
            systems came with unexpected constraints, especially when certain
            APIs could not support the desired level of interaction. Instead of
            compromising the user experience, I collaborated closely with
            developers to identify alternative workflows that preserved intent
            and usability.
          </li>
        </ol>
      </Project_Tag>{" "}
      <Project_Tag head_text="User Flow">
        <span>
          The user flow for residents on KoboSmart was designed around
          simplicity and efficiency. Paying a bill follows a clear, minimal path
          and visual feedback reassures users at every stage, while options for
          recurring payments make managing regular dues effortless.
        </span>
      </Project_Tag>
      <img src={"/prod1_img4.png"} alt="research" className="size-full" />
      <Project_Tag head_text="Research to Reality ">
        <span>
          Right from the start of the design phase, it was clear the mobile
          experience was everything for KoboSmart. Most residents and estate
          admins preferred using their phones to manage day-to-day activities
          like payments, guest passes, and communication. Prioritizing mobile
          was not just a design choice. It was a reflection of how people live,
          pay, and interact with their communities.
        </span>
        <span>
          The design approach focused on clarity and accessibility. We aimed
          to make every interaction smooth, whether a user was viewing a bill or
          signing up, ultimately building trust and a feeling of simplicity.
          Each flow was built around real-world actions that users perform
          daily, tested against scenarios drawn from interviews and mock
          simulations with early adopters.
        </span>
        <span>
          The result was a cohesive system that connects everyone in an estate:
          residents, admins, and security.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Onboarding ">
        <span className=" ">
          <p>
            <span>Welcoming Start:</span> A friendly splash screen explains
            KoboSmart helps you pay bills effortlessly, with clear “Create
            Account” and “Login” options.
          </p>

          <p>
            <span>Smooth Registration:</span> Minimal input fields (email and
            password) with clear password validation and Google sign-in for easy
            access.
          </p>

          <p>
            <span>Secure Verification:</span> OTP confirmation ensures user
            authenticity, with an option to resend the code if needed
          </p>
          <p>
            <span>Profile Setup:</span> Users add personal details like name,
            photo, and address to personalize their account and enable estate
            linking later.
          </p>
          <p>
            <span>Identity Verification:</span> Users verify their BVN or NIN by
            matching their full name and date of birth, promoting accuracy and
            compliance.
          </p>
          <p>
            <span>Confirmation and Onboarding Complete:</span> A success screen
            with a unique KoboSmart ID and a single “Go to Dashboard” button
            finalizes onboarding, reinforcing trust and readiness.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod1_img5.png"}
        alt="onboarding_screen"
        className={img_style}
      />
      <Project_Tag head_text="Dashboard ">
        <span className={clsx(span)}>
          <p>
            <span>Estate Bill Overview:</span> The top section clearly displays
            the total amount of estate bill owed and due date, with a bold “Pay
            All Bills” button for quick payment.
          </p>
          <p>
            {" "}
            <span>Categorized Bill Options:</span> Icons for Airtime, Cable,
            Data, and Electricity are neatly grouped, with badges like “10% off”
            to encourage engagement. Upcoming features like Betting and Taxes
            are marked as “Coming Soon.”
          </p>
          <p>
            {" "}
            <span>Estate Management:</span> Residents can easily join an
            existing estate or recommend a new one. The forms for joining
            capture essential details such as address, building type, and number
            of bedrooms.
          </p>
          <p>
            {" "}
            <span>Linking Card for Auto-Pay: </span>Users can link their bank
            account or debit card to enable automatic payments. A clear
            verification process is explained, including the one-time ₦100
            validation charge and refund.
          </p>
          <p>
            <span>Seamless Verification Flow:</span> The design builds user
            trust through step-by-step prompts that confirm successful account
            linking with friendly visuals and clear feedback.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod1_img6.png"}
        alt="dashboard_screen"
        className={img_style}
      />
      <Project_Tag head_text="Estate">
        <span className={clsx(span)}>
          <p>
            <span>Multi-Estate Management:</span> Residents can belong to
            multiple estates. The “My Estates” screen allows easy switching
            between estates, showing at a glance how much is owed and the next
            due date.
          </p>
          <p>
            <span>Clear Role Identification:</span> Each estate clearly
            indicates the user’s role (for example, Member or Admin) ensuring
            transparency in permissions and accessible features.
          </p>
          <p>
            <span>Transparent Bill Breakdown:</span> The estate dashboard
            displays an itemized bill summary (e.g., electricity, waste
            management) with due dates and payment statuses for each item.
          </p>
          <p>
            <span>Guest Access Control:</span> Users can generate digital guest
            passes by entering visitor details (name, email, vehicle plate,
            visit duration). This improves estate security and visitor tracking.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod1_img7.png"} alt="estate" className={img_style} />
      <Project_Tag head_text="Estate Admins">
        <span className={clsx(span)}>
          <p>
            <span>Comprehensive Overview Dashboard:</span> The estate admin
            dashboard gives an at-a-glance view of all essential metrics. This
            helps admins track estate finances and engagement effortlessly.
          </p>{" "}
          <p>
            <span>Quick Actions Panel:</span> Admins have quick access to core
            estate management tools all organized for efficiency and ease of
            navigation.
          </p>
          <p>
            {" "}
            <span>Resident Admission Management:</span> The admin can review,
            approve, or reject admission requests from residents. Each request
            shows detailed resident and apartment information for verification
            before approval.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod1_img8.png"} alt="estate" className={img_style} />
      <Project_Tag head_text="Estate Members">
        <span className={clsx(span)}>
          <p>
            <span>Detailed Member Overview:</span> The Members page lists all
            estate members with essential details such as name, role, status,
            and date joined. This allows admins to quickly assess estate
            participation and track member activity.
          </p>
          <p>
            <span>Role & Visibility:</span> Admins can filter members by role
            (Resident, Security, Admin) or payment status, making it easier to
            manage responsibilities and identify overdue residents.
          </p>
          <p>
            <span>Quick Member Action:</span> Each member row includes quick
            actions like Edit, View Details, Suspend, or Remove. This gives
            admins control without navigating away from the page.
          </p>
          <p>
            <span>Member Details:</span> Clicking on a member opens a detailed
            side drawer showing profile information, contact details, apartment
            type, and payment history, all organized for clarity.
          </p>
          <p>
            <span>Status Indicator:</span> Visual cues (e.g., green for paid,
            red for owing) immediately show who’s in good standing and who needs
            follow-up.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod1_img9.png"} alt="estate members" className={img_style} />
      <Project_Tag head_text="Unpaid Bills">
        <span className={clsx(span)}>
          <p>
            {" "}
            <span>Centralized Overview of Overdue Payments:</span> The first
            screen presents a clear, minimal view of all overdue payments,
            making it easy for admins to track estate-wide payment status.
          </p>{" "}
          <p>
            <span>Details for Each Bill Type:</span> When an admin taps “View,”
            they’re taken to a detailed list of members who owe for that
            specific bill. Each row includes the member’s name, the due date,
            and quick access actions, creating a transparent record of unpaid
            obligations.{" "}
          </p>
          <p>
            <span>Confirmation for Reminders:</span> A lightweight modal
            confirmation screen appears when sending reminders. This prevents
            accidental triggers and provides a sense of control and assurance
            for the admin.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod1_img10.png"}
        alt="estate members"
        className={img_style}
      />
      <Project_Tag head_text="Bill Management">
        <span className={clsx(span)}>
          <p>
            {" "}
            <span>Detailed Setup:</span> Administrators can define the bill
            name, due date, and whether the bill is recurring. Flexible Pricing:
            Bill amounts can be configured to be the &quot;Same amount for all
            buildings&quot; or varied &quot;By Building Type.&quot;
          </p>
          <p>
            {" "}
            Confirmation & Review: A final review screen ensures all details are
            correct before a &quot;Bill Created Successfully&quot; confirmation
            is displayed.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod1_img11.png"}
        alt="Bill Managment "
        className={img_style}
      />{" "}
      <Project_Tag head_text="Reports">
        <span className={span}>
          <p>
            {" "}
            <span>Quick Financial Snapshot:</span> The Quick Overview provides
            immediate views of both &quot;Recent Settlements&quot; and
            &quot;Recent Payments.&quot;
          </p>{" "}
          <p>
            <span>Export Functionality:</span> Both the Transactional and
            Settlement reports include an &quot;Export&quot; or &quot;Download
            Report&quot; option for external use.
          </p>{" "}
          <p>
            <span>Settlement Tracking:</span> The Settlement Report displays the
            &quot;Total Amount Settled,&quot; the &quot;Next Settlement
            Date,&quot; and a history of all transfers.
          </p>
          <p>
            {" "}
            <span>Ledger Balance View:</span> The Ledger Report tracks the
            &quot;Pending Settlement&quot; amount and provides a detailed
            breakdown of the amounts contributing to that ledger.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod1_img12.png"} alt="reports" className={img_style} />{" "}
      <Project_Tag head_text="Security">
        <span className={clsx(span)}>
          <p>
            <span>Member & Guest Verification Access:</span> Security officers
            have dedicated access to verify the identity of estate members and
            guests.
          </p>
          <p>
            <span>Recent Activity Log: </span>A timeline of &quot;Recent
            Activities&quot; tracks who has been recently verified, including
            members and guests.
          </p>
          <p>
            <span>Bill Status Check:</span> The system verifies if members have
            paid all necessary bills before granting access.
          </p>
          <p>
            <span>Guest Pass Validation:</span> Guest verification is based on
            validating a pre-existing &quot;Guest Pass&quot; created by a
            resident.
          </p>
        </span>
      </Project_Tag>
      <img
        src={"/prod1_img13.png"}
        alt="estate members"
        className={img_style}
      />
      <Project_Tag head_text="User Testing">
        <span>
          After completing the first design iteration, we conducted moderated
          usability testing with 12 participants (a mix of residents, estate
          admins, and security personnel) from different housing communities.
          The goal was to understand how easily users could navigate the app,
          complete core actions like paying bills, and manage estate activities
          without confusion.
        </span>

        <span>
          <span>We structured the sessions around five key tasks:</span>
          <ol className={clsx("pl-5", ol)}>
            <li>
              A resident paying an electricity bill and setting up recurring
              payments.
            </li>
            <li> An estate admin creating a new monthly bill.</li>
            <li>A security officer validating a guest pass.</li>
            <li>A super admin reviewing estates and approving new admins.</li>
            <li>A resident requesting to join an estate through the app.</li>
          </ol>
          <span>
            We conducted the tests remotely via recorded sessions and in-person
            where possible. Each session lasted about 40 minutes, followed by a
            short feedback discussion.
          </span>
        </span>
      </Project_Tag>
      <Project_Tag head_text="Key Findings">
        <ol className={clsx(span, ol)}>
          <li>
            <span>Information Hierarchy Mattered:</span> Many users hesitated
            during the bill payment flow because the amount summary appeared
            below the payment options. We moved the summary higher up and added
            a confirmation step that improved clarity.{" "}
          </li>
          <li>
            <span>Security Role Clarity:</span> Security users were initially
            unsure about how to verify guest passes. We added a clearer
            call-to-action—“Verify Guest”—and reduced the number of steps
            required.
          </li>
          <li>
            <span>Admin Overload:</span> Estate admins felt overwhelmed by the
            number of settings during bill creation. We introduced tooltips,
            grouped related fields, and collapsed advanced options to reduce
            visual noise.
          </li>
          <li>
            <span>Positive Feedback on Flow:</span> Across all roles, testers
            appreciated how the system reflected real estate hierarchies and
            transactions, saying it felt “easy to use” and “well thought-out.”
          </li>
        </ol>
        <span>
          Testing validated that our core interaction patterns were solid but
          revealed areas where microcopy, visual hierarchy, and contextual
          cues significantly affected user understanding. Iterating on these
          insights led to a smoother experience that minimized confusion and
          supported faster task completion.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Business Impact">
        KoboSmart positioned itself as both a financial and community
        infrastructure tool. Early testing showed that admins spent 60% less
        time reconciling payments. Residents reported higher satisfaction due to
        timely reminders and transparent records. The system’s ledger and
        settlement modules built trust between estates and KoboSmart’s platform.
      </Project_Tag>{" "}
      <Project_Tag head_text="Looking Back">
        Designing KoboSmart was an exercise in translating human behavior into
        digital systems. It taught me how community habits shape product
        expectations. What began as a payment app grew into a social layer for
        how estates operate.
      </Project_Tag>
    </>
  );
};
