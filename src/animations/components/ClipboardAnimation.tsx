import React from "react";

import { useLottie } from "lottie-react";

import Clipboard from "../src/clipboard.json";

export default function ClipboardAnimation() {
  const defaultOption = {
    autoplay: true,
    loop: true,
    keepLastFrame: true,
    animationData: Clipboard,
  };
  const style = {
    width: "500px",
    height: "500px",
  };
  const { View } = useLottie(defaultOption, style);
  return View;
}
