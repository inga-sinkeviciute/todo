import React from "react";
import { StyledBox } from "./styles";

const Box = ({ children, fullWidth }) => {
  return <StyledBox fullWidth={fullWidth}>{children}</StyledBox>;
};

export default Box;
