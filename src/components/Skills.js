import Slider from "./UI/slider";
import { useState } from "react";

export default function Skills() {
  return (
    <div>
      <Slider title="Languages" text="JavaScript, Java" />
      <Slider title="Technology" text="React, Express" />
      <Slider title="Tools" text="MongoDB, Firebase" />
    </div>
  );
}
