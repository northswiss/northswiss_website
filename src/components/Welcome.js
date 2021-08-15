import React from 'react'

export const Mantra = () => {
    return (
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
    )
}
