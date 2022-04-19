import React from "react";

import { useLottie } from "lottie-react";

import Tasks from "../src/tasks.json";

export default function TasksAnimation() {
  const defaultOption = {
    autoplay: true,
    loop: true,
    keepLastFrame: true,
    animationData: Tasks,
  };
  const style = {
    width: "500px",
    height: "500px",
  };
  const { View } = useLottie(defaultOption, style);
  return View;
}
