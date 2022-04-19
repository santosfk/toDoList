import React from "react";
import { TextField } from "@mui/material";
import { Title } from "./style";
export default function Signup() {
  return (
    <>
      <Title></Title>
      <TextField id="filled-basic" label="Email" variant="filled" />
    </>
  );
}
