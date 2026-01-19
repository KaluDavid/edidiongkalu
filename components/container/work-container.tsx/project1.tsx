import { Project_Card } from "@/components/data/projects_card";
import React from "react";
import { H_Tag, P_Tag, Project_Tag, User_Story } from "../smaller_container";
import { img_style, ol, span } from "@/components/style/style";
import clsx from "clsx";

export const Project1 = () => {
  return (
    <>
      <Project_Tag head_text="Business Goal: Simplifying market insights and financial analysis for Nigerian retail investors.">
        KBS Insight was developed to empower retail investors with tools to make
        informed financial decisions. The business wanted to position itself as
        Nigeria’s go-to destination for simplified market insights, investment
        tracking, and AI-generated financial analysis. The long-term goal was to
        attract both new and experienced investors by providing a platform that
        merges the simplicity of with depth.
      </Project_Tag>{" "}
      <Project_Tag head_text="Market Size & Growth">
        Nigeria’s retail investor market has been expanding steadily, driven by
        a growing interest in fintech and personal finance. The number of retail
        investors in the Nigerian Exchange Group (NGX) rose significantly in
        recent years as more people sought digital investment options. KBS
        Insight targeted this emerging audience (young professionals aged 20–50)
        who were tech-savvy but often overwhelmed by financial jargon. The
        product needed to meet their curiosity with simplicity, and their
        ambition with insight.
      </Project_Tag>{" "}
      <Project_Tag head_text="Forecast & Strategy">
        The strategy for KBS Insight centred on building trust and engagement.
        The forecast was that by simplifying access to market data and pairing
        it with AI-backed recommendations, user retention would increase, and so
        would conversion to paid features. To achieve this, I designed an
        interface that makes key market information visible at a glance while
        allowing deeper exploration for users who want to analyze trends or
        build portfolios.
      </Project_Tag>{" "}
      <Project_Tag head_text="Project Goal">
        The design goal was to build a product that feels modern, fast, and
        familiar. Every screen had to balance simplicity with utility. The
        visual system needed to be professional but not intimidating, appealing
        to new investors while being reliable enough for experienced ones. The
        final experience had to work well across devices, as many users in
        Nigeria access financial tools via mobile browsers.
      </Project_Tag>{" "}
      <Project_Tag head_text="Research">
        <span>
          My research began with understanding how Nigerians interact with
          investment platforms. I conducted interviews with retail investors,
          professionals, and small business owners who occasionally invested
          through NGX or bank-managed channels.
        </span>
        <span>
          The conversations revealed a consistent pattern: people wanted to
          invest, but financial tools often felt inaccessible. One participant,
          a civil engineer in his early thirties, shared,
          <span className="italic text-[#5E5E5E]">
            “I check stock updates once in a while, but I never really
            understand what I’m looking at. Everything feels too technical.”
          </span>
        </span>
        <span>
          Another user added, 
          <span className="italic text-[#5E5E5E]">
            “I use the NGX website, but it’s hard to find what I need quickly.
            Sometimes I just give up and check finance pages on Twitter.”
          </span>
        </span>
        <span>
          These insights made it clear that the challenge wasn’t just access to
          data but comprehension. Many users wanted the same information that
          stockbrokers used but presented in plain language.
        </span>
        <span>
          These voices guided my approach: focus on simplicity without losing
          credibility.
        </span>
      </Project_Tag>
      <img src={"/prod2_img2.png"} alt="research" className={img_style} />
      <Project_Tag head_text="Competitive Analysis">
        <span>
          In examining three key platforms (NASD PLC, Chaka and Nigerian
          Exchange Group), clear contrasts emerged that helped define how KBS
          Insight would differentiate itself.
        </span>
        <span>
          NASD PLC primarily serves as an over-the-counter market and
          information portal. Their website emphasizes market statistics, price
          lists, and institutional data. While rich in data, the experience is
          complex and designed for investors who already understand market
          mechanics. For a retail user seeking clarity this presents a barrier.
        </span>
        <span>
          Chaka offers a brokerage and investment access app enabling Nigerians
          to trade local and international stocks. Its strength lies in access
          and trading rather than deep insight or educational guidance. New
          investors still struggle to interpret market data or understand
          strategy.
        </span>
        <span>
          NGX serves as Nigeria’s primary exchange operator and data provider.
          Its site covers listing rules, market data, indices and investor
          tools. Although authoritative, its interface is corporate and oriented
          toward issuance and listing rather than tailored guidance for
          non-expert retail investors.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Key Findings">
        <ol className={clsx("marker:font-medium", ol)}>
          <li>
            None of the three platforms combine market access, plain-spoken
            insight, and localized design for everyday investors.
          </li>
          <li>
            NASD and NGX deliver raw data but lack user-friendly interpretation
            or engagement layers.
          </li>
          <li>
            Chaka provides a functional brokerage flow but stops short of
            building deeper investment understanding or long-term tracking.
          </li>
          <li>
            KBS Insight can occupy the space between raw market infrastructure
            and trading access by offering:
            <div className="pl-5 flex flex-col *:first-letter:font-medium">
              {" "}
              <span>
                a. Simplified interpretation of data (not just charts and
                numbers).
              </span>
              <span>
                b. Localized relevance for Nigerian retail users (Naira
                currency, NGX tickers, familiar UX).
              </span>
              <span>
                c. Engagement tools (portfolio tracking, AI-driven commentary,
                comparisons) that help demystify investing rather than add
                complexity.
              </span>
            </div>
          </li>
        </ol>
        <span>
          The product addresses an under-served gap by positioning KBS Insight
          in that middle space, catering to the everyday Nigerian who wants more
          than trading access but less complexity than broker-level platforms.
        </span>
      </Project_Tag>
      <Project_Tag head_text="User Stories">
        <span>
          During the research phase, I found that investors in Nigeria
          approached financial tools with a mix of curiosity and caution. Most
          had tried using market platforms before but felt overwhelmed by
          technical data and confusing navigation. Many of them wanted a tool
          that worked more like a guide, one that could simplify how they
          understood market movements, track their investments, and give them
          context for what those numbers meant.
        </span>
        <span>
          The user stories emerged directly from these conversations. They
          helped shape how each feature of KBS Insight was designed and
          prioritized.
        </span>
        <div className="flex sm:flex-row flex-col w-full justify-between  gap-8">
          <User_Story text="As a retail investor, I want to view the overall market performance and the latest stock prices at a glance, so I can quickly understand how the market is performing today." />{" "}
          <User_Story text="As a new investor, I want to search for company profiles and see their historical performance, so I can decide whether they are worth investing in." />{" "}
          <User_Story text="As a user with multiple holdings, I want to create my own portfolio and add investments manually, so I can track my performance in one place instead of using spreadsheets." />
        </div>
      </Project_Tag>
      <Project_Tag head_text="Interaction Design & Accessibility">
        Every interaction was designed to reduce cognitive load. Large
        typography, simplified charts, and progressive data layers ensured users
        could find meaning without effort. Accessibility shaped the design
        deeply: colour contrast met WCAG standards, gain/loss visuals relied on
        intuitive green and red cues. The interface was intentionally toned to
        match how users spoke in interviews, making it direct, friendly, and
        clear.
      </Project_Tag>
      <Project_Tag head_text="Ideation & Prioritization">
        <span>
          When the research wrapped up and the core problem was clear, I moved
          into the ideation stage with one main question: How do we make KBS
          Insight truly helpful for the typical Nigerian investor without
          confusing them? I needed a platform that offered immediate value but
          could also grow long-term. To figure that out, I mapped every single
          feature idea we had, pulling from research, looking at competitors,
          and talking to stakeholders. These ideas covered everything from
          market news and tracking portfolios to expanding internationally and
          using AI.
        </span>
        <span>
          {" "}
          To make sense of all this, I built a prioritization map that ranked
          each feature based on Impact versus Effort. The vertical side showed
          the Impact (the value for both users and the business), and the
          horizontal side showed the Effort(design time, technical work, and
          resources needed).
        </span>
      </Project_Tag>
      <img src={"/prod2_img3.png"} alt="userflow" className="size-full" />
      <Project_Tag head_text="Overcoming Constraints">
        <span>
          When designing for Nigeria&apos;s internet, I had to keep slow network
          speeds and payment worries in mind. To make the app fast, I used
          simple charts and cut down on heavy data requests.
        </span>
        <span>
          Payment trust was a huge issue; people were nervous about saving their
          cards. One person even told me, &quot;The payment thing worries me,
          I&apos;ve had issues with cards being charged twice before. If
          it&apos;s transparent and secure, I&apos;ll trust it.&quot; So, the
          payment flow was designed to be transparent, showing exactly what they
          were paying for, and securely routed them through a trusted service
          called TransactPay.
        </span>
      </Project_Tag>
      <Project_Tag head_text="User Flow">
        <span>
          The user journey was structured to feel intuitive and self-guided.
          This is a simple flow for users who want to compare stocks from
          different companies.
        </span>
      </Project_Tag>
      <img src={"/prod2_img4.png"} alt="userflow" className="size-full" />
      <Project_Tag head_text="Research to Reality">
        <span>
          Every insight gathered during the research phase became a building
          block for the product’s final experience. The patterns, frustrations,
          and aspirations that emerged from user interviews guided how each
          feature was designed. What started as a set of raw observations
          evolved into a cohesive platform where users could explore the market,
          track their portfolios, and access AI-driven insights with ease. This
          section breaks down how those findings were translated into tangible
          design decisions across the different parts of KBS Insight.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Home Page">
        <span className={span}>
          <p>
            {" "}
            <span>Real-Time Price Ticker:</span> Live stock prices for major
            Nigerian companies (BUAFOODS, ZENITHBANK, etc.) are prominently
            displayed at the top.
          </p>
          <p>
            <span>Search Functionality:</span> A search bar allows users to find
            specific stocks, funds, or companies.
          </p>{" "}
          <p>
            <span>Market Overview:</span> The homepage opens with real-time
            performance data of major Nigerian market indices, allowing users to
            immediately grasp the market’s direction without extra navigation.
          </p>
          <p>
            <span>Dynamic Index Chart:</span> A live, interactive chart
            showcases index movements throughout the day, offering users instant
            visual insight into market performance and trends.{" "}
          </p>
          <p>
            <span>Stock Listing:</span> The stock listings under each index
            provide a clear, scrollable table of top-performing companies,
            featuring colour-coded performance indicators for easy comparison.
          </p>
          <p>
            <span>Index Summary:</span> An informational sidebar summarizes key
            index metrics, including market cap, dividend yield, and sector
            distribution, giving context to the data in a simplified format.
          </p>
          <p>
            <span>Market News:</span> The Market News section integrates curated
            headlines from credible financial sources, ensuring users stay
            informed on major market shifts and company-specific developments
            directly from the homepage.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod2_img5.png"} alt="homepage" className={img_style} />
      <img src={"/prod2_img6.png"} alt="homepage" className={img_style} />
      <Project_Tag head_text="Company Profile Page">
        <span className={span}>
          <p>
            <span>Dynamic Stock Overview:</span> The company profile opens with
            a live stock chart and performance summary, giving users immediate
            visibility into a company’s price movement, growth rate, and overall
            market position.
          </p>
          <p>
            <span>Company Summary Sidebar:</span> A concise summary panel
            presents essential financial metrics such as market cap, P/E ratio,
            and dividend yield, allowing users to quickly assess company
            strength without navigating away.
          </p>{" "}
          <p>
            <span>AI-Assistant Widget:</span> The “Ask KBS Invest AI” widget
            lets users interact directly with the AI for personalized insights
            and stock analysis, integrating intelligence seamlessly into the
            experience.
          </p>
          <p>
            <span>Company-Related News:</span> A curated news feed below the
            chart keeps users updated on the latest company-specific
            developments, blending data analysis with real-time information.
          </p>
          <p>
            <span>Detailed Company Data:</span> Structured tabs like Financial
            Statements, Corporate Disclosures, and Director Dealings organize
            complex information into readable, well-structured sections for
            deeper exploration.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod2_img7.png"} alt="profile_page" className={img_style} />
      <img src={"/prod2_img8.png"} alt="profile_page" className={img_style} />
      <img src={"/prod2_img9.png"} alt="profile_page" className={img_style} />
      <Project_Tag head_text="My Portfolio">
        <span className={span}>
          <p>
            <span>Interactive Chart:</span> The main graph displays historical
            price data with customizable time ranges (1D, 5D, 1M, 6M, 1Y, 5Y,
            Max).
          </p>{" "}
          <p>
            <span>Portfolio Performance Summary:</span> Highlights the
            portfolio&apos;s Total Gain and Day Gain with both monetary and
            percentage change.
          </p>{" "}
          <p>
            <span>Symbol Comparison: </span>A dedicated field allows users to
            easily search for and compare the performance of other symbols
            (e.g., BUACEMENT).
          </p>
          <p>
            <span>Detailed Holding List:</span> A table lists individual
            investments (DANGCEM, FCMB, GEREGU) with price, quantity, day gain,
            and total value.
          </p>{" "}
          <p>
            <span>Easy Investment Addition: </span>A clear &quot;+ Add
            Investments&quot; button is available for users to expand their
            portfolio.
          </p>{" "}
          <p>
            <span>News Tab Integration:</span> A dedicated tab allows users to
            toggle between viewing their Investments and relevant News items.
          </p>
        </span>
      </Project_Tag>
      <img src={"/prod2_img10.png"} alt="my_portfolio" className={img_style} />
      <Project_Tag head_text="AI-Insights">
        <span className={span}>
          <p>
            {" "}
            <span>AI-Driven Core Value:</span> The primary feature offers
            forecasts, commentary, and scenario analysis powered by a
            proprietary AI model.
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
          </p>{" "}
        </span>
      </Project_Tag>
      <img src={"/prod2_img11.png"} alt="ai_insight" className={img_style} />
      <Project_Tag head_text="Other Pages"> </Project_Tag>
      <img src={"/prod2_img12.png"} alt="other_pages" className={img_style} />
      <img src={"/prod2_img13.png"} alt="other_pages" className={img_style} />
      <Project_Tag head_text="User Testing">
        <span>
          User testing was a crucial part of validating the design direction for
          KBS Insight. I conducted two testing rounds with a total of eight
          participants drawn from different backgrounds who had shown interest
          in trading Nigerian stocks. Each session lasted between 25 and 40
          minutes and was conducted remotely via Zoom, using an interactive
          Figma prototype that mirrored the final design.
        </span>
        <span>
          The goal was to evaluate comprehension, navigation, and trust
          perception. Participants were asked to perform specific tasks such as
          viewing daily market metrics, searching for a company, comparing two
          stocks, and adding an investment to their portfolio. They were also
          asked to explore the AI Insights section to test how they interpreted
          automated forecasts and commentary.
        </span>
        <span>
          During testing, several themes emerged. Most users appreciated
          the visual simplicity and clarity of the home page. The introduction
          of the blurred background during sign-up gave users a sense of
          continuity rather than disruption. One participant said, “It feels
          like I’m still part of the app even when I haven’t logged in yet. I
          like that.” Another noted that the NGX-30 chart appearing immediately
          on load helped them understand market movement faster, eliminating the
          “where do I start?” moment that’s common on financial dashboards.
        </span>
        <span>
          However, a few users struggled to notice the “Compare Stocks” entry
          point at first glance. This led to a design revision where I added a
          persistent search bar for comparisons at the top of the Company
          Profile page, along with auto-complete hints to guide user input.
        </span>
        <span>
          In totality, usability testing confirmed that users could complete key
          tasks smoothly, understand financial data at a glance, and felt more
          confident interacting with investment tools.
        </span>
      </Project_Tag>
      <Project_Tag head_text="Business Impact">
        <span>
          KBS Insight positioned itself as one of the few financial platforms
          designed for Nigerians from the ground up. It bridged a gap between
          sophisticated market tools and accessible learning. The design
          improved user confidence, increased engagement, and created a clear
          path toward monetization through premium subscriptions.
        </span>
        <span>
          The project proved that financial design doesn’t need to be exclusive.
          By prioritizing simplicity, context, and local trust, KBS Insight
          turned financial complexity into clarity.
        </span>
      </Project_Tag>
    </>
  );
};
