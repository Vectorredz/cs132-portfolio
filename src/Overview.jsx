import "../src/styles/app.css";
import { useState } from "react";
function Overview( {overviewRef} ) {
  const [toggle, setToggle] = useState(0);
  const tabs = [
    { id: 0, label: "Overview"},
    { id: 1, label: "Background"},
    { id: 2, label: "Research Questions"}
  ]

  function updateToggle(idx) {setToggle(idx)}

  return (
    <section ref={overviewRef} class="flex items-center justify-center h-full bg-3 text-white pb-20">
      <div class="max-w-6xl">
        <article className="overview-text pb-5 justify-center">
          Our Area Of Study
        </article>

        {/* Overview titles */}
        <ul class="grid grid-cols-3 md:grid-cols-3 text-center pb-10">
          {
            tabs.map((tab, index) => (
              <li
                id={tab.id}
                className={`tab-underbutton ${toggle === index ? "selected" : ""}`}
                onClick={() => updateToggle(index)}
              >
                <button className="tab-text">
                  {tab.label}
                </button>
              </li>

            ))

          }
          
          
        </ul>

        <div class={toggle === 0 ? "show-content" : "content"}>
          <p>
            While mobile communication in the Philippines has made connectivity
            more accessible, it has also become a tool for cybercriminals.
            <span class="bg-orange-300 text-blue-900 font-black">
              The rise of SMS scams — from fake promos to phishing schemes —
              threatens public trust in digital infrastructure
            </span>
            . Despite government and telecom crackdowns, fraudulent texts
            continue to evolve, highlighting the need for smarter, data-driven
            solutions.
          </p>
          <div className="pt-5">
            <div className="relative flex rounded-2xl overflow-hidden">
              <img src="scam.png" alt="" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-accent-2 text-sm">PrivadoVPN, 2022</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-10 mt-10">
            <div>
              <h2 class="pb-5 font-bold text-xl">Problem</h2>
              <p>
                SMS scams in the Philippines are widespread and constantly
                adapting, making it difficult for existing defenses to keep up.
                This undermines consumer trust in mobile communication and
                financial services.
              </p>
            </div>
            <div class="border-l-2 px-10 text-xl">
              <h2 class="pb-5 font-bold">Solution</h2>
              <p>
                Our solution is to apply machine learning models using both
                classical and transformer to detect and analyze scam texts. By
                studying linguistic patterns unique to Philippine SMS, we aim to
                develop a robust detection system that enhances trust in mobile
                infrastructure and protects users from fraud.
              </p>
            </div>
          </div>
        </div>

        <div class={toggle === 1 ? "show-content" : "content"}>
          <p class="mt-6 text-lg text-white font-space-grotesk text-justify">
            The rapid growth of mobile communication in the Philippines has been
            accompanied by an alarming rise in spam and scam text messages.{" "}
            <span class="highlight">
              In 2024, over 6.1 million SMS scams were reported nationwide
            </span>
            , with the final quarter contributing almost one-third of incidents
            (Dela Cruz, 2025). Although the{" "}
            <span class="font-bold">
              Department of Information and Communications Technology (DICT) 
            </span> and the{" "}
            <span class="font-bold">
              National Telecommunications Commission (NTC)
            </span>{" "}
            have intensified crackdowns to block billions of fraudulent SMS and
            dismantle scam hubs, cybercriminals have continued to adapt, often
            using spoofing and phishing tactics that weaken consumer trust in
            mobile infrastructure (Salonga, 2024).
            <br />
            <br />
            Telecommunications companies have also scaled up defenses. In 2025,
            Globe Telecom launched the SMS Scam Shield, an in-app feature
            designed to automatically flag suspicious texts.{" "}
            <span class="highlight">
              Globe also reported blocking over 484 million scam and spam
              messages
            </span>{" "}
            in the first half of 2025 alone (Amojelar, 2025; Camus, 2025). These
            interventions highlight industry recognition of the scale of the
            problem, yet they also underscore the need for complementary,
            data-driven solutions that can generalize across new and evolving
            scam strategies.
            <br />
            <br />
            Globally, text-based fraud remains a pressing concern. <span class="highlight">
              The FBI
              recently issued warnings about “smishing” attacks targeting mobile
              users (Zilber, 2025)
            </span>, while researchers have reported the growing
            use of SMS “blasters” that enable mass scam campaigns (Wired, 2025).
            In the Philippines, recent law enforcement operations dismantled
            hubs employing hundreds in cybercrime activities (Associated Press,
            2025). Against this, developing robust machine learning models for
            SMS spam and fraud detection is both timely and aligned with SDG 9
            (Industry, Innovation, and Infrastructure) and SDG 16 (Peace,
            Justice, and Strong Institutions) to strengthen trust in digital
            communication while addressing cybercrime.
          </p>
        </div>

        <div class={toggle === 2 ? "show-content" : "content"}>
          <section class="flex flex-col items-center justify-center text-white px-10">
            <div class="max-w-5xl">
              <h2>This left us pondering the following...</h2>
              <article class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-5">
                  <h2 class="mt-6 text-lg font-bold font-space-grotesk">
                    1.  Is there a significant difference in message length between spam and non-spam SMS messages in the Philippines?
                  </h2>
                  <hr class="my-7 mx-2" />
                  <h3 class="font-bold">Null Hypothesis:</h3>
                  <p>
                    There is{" "}
                    <span class="highlight-2">no significant difference</span>{" "}
                     in message length between spam/scam and non-spam SMS messages.
                  </p>
                  <h3 class="font-bold">Alternative Hypothesis:</h3>
                  <p>
                    Spam/scam messages have significantly different message lengths than non-spam messages.
                  </p>
                </div>
                <div>
                  <div class="flex flex-col gap-5">
                    <h2 class="mt-6 text-lg font-bold font-space-grotesk">
                      2. What are the common characteristics and linguistic
                      patterns of SMS spam/scam messages in the Philippines, and
                      how do they differ from non-spam (ham) messages?
                    </h2>
                    <hr class="my-7 mx-2" />
                    <h3 class="font-bold">Null Hypothesis:</h3>
                    <p>
                      There are{" "}
                      <span class="highlight-2">
                        no significant differences
                      </span>{" "}
                      in linguistic patterns (e.g., message length, keyword
                      frequencies) between spam/scam and non-spam messages.
                    </p>
                    <h3 class="font-bold">Alternative Hypothesis:</h3>
                    <p>
                      Spam/scam messages exhibit distinct linguistic patterns
                      compared to non-spam messages.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Overview;
