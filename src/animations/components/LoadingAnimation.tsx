import React from "react";

import { useLottie } from "lottie-react";

import loading from "../src/loading.json";

export default function LoadingAnimation() {
  const defaultOption = {
    autoplay: true,
    loop: true,
    keepLastFrame: true,
    animationData: loading,
  };
  const style = {
    width: "100px",
    height: "100px",
  };
  const { View } = useLottie(defaultOption, style);
  return View;
}
