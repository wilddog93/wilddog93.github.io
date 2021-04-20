import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {greeting.title2}&trade; 1993 - 2021
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Template design inspired by Harikrushn
        </p>
      </Fade>
    </div>
  );
}
