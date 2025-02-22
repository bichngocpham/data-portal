/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * LungMAP Portal footer links component.
 */

// Core dependencies
import React from "react";

// App dependencies
import FooterLink from "../footer-link/footer-link";

// Styles
import compStyles from "./footer-links-lungmap.module.css";

function FooterLinksLungMAP() {
  const link = {
    name: "Privacy",
    path: "lungmap-privacy"
  };
  return (
    <div className={compStyles.links}>
      <FooterLink key="Privacy" link={link} />
    </div>
  );
}

export default FooterLinksLungMAP;
