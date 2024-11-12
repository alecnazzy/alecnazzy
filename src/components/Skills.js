import Slider from "./UI/slider";
import { useState } from "react";

export default function Skills() {
  return (
    <div>
      <Slider title="Languages" text="JavaScript, Python, Java" />
      <Slider title="Technologies" text="React, Express" />
      <Slider title="Tools" text="MongoDB, Figma" />
    </div>
  );
}
