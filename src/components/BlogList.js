import React from "react";
// import PropTypes from 'prop-types'

fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@northswiss"
)
  .then((res) => res.json())
  .then((data) => {
    // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
    const res = data.items; //This is an array with the content. No feed, no info about author etc..
    const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !

    // Functions to create a short text out of whole blog's content
    function toText(node) {
      let tag = document.createElement("div");
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    }

    function shortenText(text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    }

    // Put things in right spots of markup
    let output = "";
    posts.forEach((item) => {
      output += `
         <li class="blog__post">
            <a href="${item.link}" target="_blank">
               <div class="blog__content">
                 <h3 class="blog__title">${shortenText(item.title, 0, 100)}</h3>
                 <p class="blog__intro">${
                   shortenText(toText(item.content), 0, 124) + "&hellip;"
                 }</p>
               </div>
            </a>
         </li>`;
    });
    document.querySelector(".blog__slider").innerHTML = output;
  });

const BlogList = (props) => {
  return (
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
                    Taking the first steps into design research — Lessons from
                    TravelPerk{" "}
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
            It seems there was an issue fetching the latest articles. Please try
            again later...
          </ul>
        </div>
      </div>
      <a class="button" href="https://medium.com/@northswiss">
        Follow Chris on Medium
        <img alt="link arrow" src="assets/svgs/link-arrow.svg" />
      </a>
    </section>
  );
};

/* BlogList.propTypes = {

} */

export default BlogList;
