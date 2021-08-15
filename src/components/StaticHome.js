import React from "react";

export const StaticHome = () => {
  return (
    <div class="content-wrapper">
      <div class="content-left">
        <section class="intro">
          <img
            alt="northswiss logo"
            class="logo"
            src="assets/svgs/northswiss-color.svg"
          />
          <div class="welcome">
            <img
              alt="welcome message"
              class="welcome-text"
              src="assets/svgs/welcome-text.svg"
            />
            <p class="definition">
              <strong>Fàilte</strong>, meaning “welcome” in Gaelic.
              <strong>Fröit mi</strong>, a Schweizerdeutsch word meaning
              “pleased to meet you”.
            </p>
          </div>
          <img
            alt="circle SVG"
            class="detail-circle"
            src="assets/svgs/detail-circle.svg"
          />
          <a href="#mantra" style={{ textAlign: "center" }}>
            <img
              alt="scroll icon"
              class="scroll-to"
              src="assets/svgs/scroll-icon.svg"
            />
          </a>
        </section>
      </div>
      <div class="content-right">
        <section class="bg-red center mantra" id="mantra">
          <img
            alt="circle SVG"
            class="detail-circle detail-circle--flip"
            src="assets/svgs/detail-circle-white.svg"
          />
          <div class="center content">
            <h4>The northswiss mantra</h4>
            <p>
              “To design is to solve problems. It is to
              <em>distil the essence of business goals and user needs</em> and
              combine these factors in creative ways that build upon established
              patterns and human psychology with the aim of providing utility
              and delight.
            </p>
            <p>This is not a job, it’s a pleasure!”</p>
            <p>—Chris Roy, Founder</p>
          </div>
          <img
            alt="cross SVG"
            class="detail-cross"
            src="assets/svgs/detail-cross-white.svg"
          />
        </section>
        <section class="bg-gray">
          <div class="content">
            <h2>What is northswiss?</h2>
            <p>
              Founded in 2007 by Scottish-Swiss
              <strong>Chris Roy</strong>—Design Lead, Product Strategist,
              Advisor and Creator—northswiss is the online presence for the
              services he offers.
            </p>
            <p>
              Currently <strong>CPO</strong>{" "}
              <a href="https://boatim.com/">@Boatim</a>, working to digitize the
              maritime products of tomorrow. Previously{" "}
              <strong>Principal Product Design Manager</strong>
              <a href="https://travelperk.com">@TravelPerk</a>—the world's
              fastest growing SaaS company in 2019.
            </p>
            <p>
              Focused on complex business problems, he's also a
              <strong>Product and Design Advisor</strong> for Barcelona-based
              <a href="https://amenitiz.io">@Amenitiz</a> and offers design
              consultancy and services on an occasional basis.
            </p>
            <p>
              In addition, he’s also a<strong>Design Thinking coach</strong>{" "}
              who's ran a number of workshops for MBA students at Barcelona’s
              top business schools, IESE and ESADE, and also within the
              companies he's worked for.
            </p>

            <p>
              Now based in Barcelona, he previously worked in various design
              positions in Scotland, most notably
              <a href="https://www.skyscanner.net">@Skyscanner</a>,
              <a href="https://www.tescobank.com/">@TescoBank</a>,
              <a href="https://sumerian.com">@Sumerian</a>,
              <a href="https://gfi.com">@GFI</a> and
              <a href="https://www.axiossystems.com/">@Axios Systems</a>.
            </p>
          </div>
          <a class="button" href="https://www.linkedin.com/in/chrisnorthswiss/">
            Connect on Linkedin
            <img alt="link arrow" src="assets/svgs/link-arrow.svg" />
          </a>
        </section>
        <section class="bg-red">
          <div class="content">
            <h2>Building a community</h2>
            <p>
              Given that one of the foundational aspects of good design is to
              solve problems, it must be recognised that a problem shared is a
              problem halved. This is why coming together and sharing the
              problems which we are trying to solve is a great way to drive our
              community forward.
            </p>
            <p>
              With this in mind, Chris organises and co-hosts
              <strong>
                <a href="https://www.meetup.com/Sketch-Design-Barcelona/">
                  Product Design Barcelona
                </a>
              </strong>
              on Meetup.com. In coming together the community has shared how it
              solves problems around: design systems; collaborating with
              developers; getting hired; plus many other topics.
            </p>
            <h4>Want to be a part of that community?</h4>
            <p>
              Great! Join us using the link below and we will happily host you
              as a guest or speaker! We are also looking out for co-organisers
              and sponsors who can help us in our mission to share and
              collaborate.
            </p>
          </div>
          <a
            class="button"
            href="https://www.meetup.com/Sketch-Design-Barcelona/"
          >
            Join our Design Community
            <img alt="link arrow" src="assets/svgs/link-arrow.svg" />
          </a>
        </section>
        <section class="bg-gray">
          <div class="content">
            <h2>Design discourse</h2>
            <p class="gray">
              Below are some articles written by, or featuring, Chris on various
              topics of design, research and building great products.
            </p>
            <div class="article-wrapper">
              <ul class="blog__slider--static">
                <li class="blog__post">
                  <a href="https://maze.co/blog/taking-first-steps-into-design-research/">
                    <div class="blog__content blog__interview">
                      <h3 class="blog__title">
                        Taking the first steps into design research — Lessons
                        from TravelPerk{" "}
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="blog__post blog__interview">
                  <a href="https://vaidapakulyte.com/ux-fika-chris-roy-building-design-culture">
                    <div class="blog__content">
                      <h3 class="blog__title">
                        UX Fika with Chris Roy on building a design culture
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="blog__post blog__featured">
                  <a href="https://maze.co/blog/prototype-testing/">
                    <div class="blog__content">
                      <h3 class="blog__title">
                        Prototype testing: how to nail your next product launch
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="blog__slider">
                It seems there was an issue fetching the latest articles. Please
                try again later...
              </ul>
            </div>
          </div>
          <a class="button" href="https://medium.com/@northswiss">
            Follow Chris on Medium
            <img alt="link arrow" src="assets/svgs/link-arrow.svg" />
          </a>
        </section>
        <section class="bg-red footer">
          <div>
            <h2>Want to collaborate?</h2>
            <p>
              Glad to hear! The best way to start would be to
              <a
                href="https://www.linkedin.com/in/chrisnorthswiss/"
                style={{ borderBottom: "1px solid #fff"}}
                
              >
                connect on LinkedIn
              </a>
              , where we can continue the conversation.
            </p>
          </div>
          <footer>
            <h4>Not quite ready yet? Keep in touch...</h4>
            <div class="social-logos">
              <a href="https://www.linkedin.com/in/chrisnorthswiss/">
                <img
                  alt="Linkedin"
                  src="assets/svgs/social-icons/linkedin-light.svg"
                />
              </a>
              <a href="https://medium.com/@northswiss">
                <img
                  alt="Medium"
                  src="assets/svgs/social-icons/medium-light.svg"
                />
              </a>
              <a href="https://dribbble.com/northswiss">
                <img
                  alt="Dribbble"
                  src="assets/svgs/social-icons/dribbble-light.svg"
                />
              </a>
              <a href="https://twitter.com/northswiss">
                <img
                  alt="Twitter"
                  src="assets/svgs/social-icons/twitter-light.svg"
                />
              </a>
              <a href="https://github.com/northswiss/">
                <img
                  alt="Github"
                  src="assets/svgs/social-icons/github-light.svg"
                />
              </a>
              <a href="https://www.behance.net/northswiss/">
                <img
                  alt="Behance"
                  src="assets/svgs/social-icons/behance-light.svg"
                />
              </a>
            </div>
            <hr />
            <small>
              Designed and coded by hand—go on, check out the source!
            </small>
          </footer>
        </section>
      </div>
    </div>
  );
};
