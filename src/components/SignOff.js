import React from 'react'

export const SignOff = () => {
    return (
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
    )
}
