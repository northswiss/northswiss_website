import React from "react";
import BlogList from "./BlogList";
import { Community } from "./Community";
import { NorthswissIntro } from "./NorthswissIntro";
import { Mantra } from "./Welcome";
import { SignOff } from "./SignOff";
import { Brand } from "./Brand";

export const StaticHome = () => {
  return (
    <div class="content-wrapper">
      <div class="content-left">
        <Brand />
      </div>
      <div class="content-right">
        <Mantra />
        <NorthswissIntro />
        <Community />
        <BlogList />
        <SignOff />
      </div>
    </div>
  );
};
