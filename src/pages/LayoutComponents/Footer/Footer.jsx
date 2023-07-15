import React from "react";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <p>todoMañana&#169;{new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
