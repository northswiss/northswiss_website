import React from 'react'

export const Brand = () => {
    return (
        <section className="intro">
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
    )
}
