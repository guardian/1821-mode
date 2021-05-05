import React from "react";
import GuardianLogo from "./guardianLogo.js";
import { Button, LinkButton } from "@guardian/src-button";

function Header() {
  const d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfTheWeek = days[d.getDay()].toUpperCase();
  const month = months[d.getMonth()].toUpperCase();
  const dayOfTheMonth = d.getDate();
  const year = d.getFullYear();

  return (
    <header style={headerStyle}>
      <div class="logo-styles">
        <GuardianLogo />
      </div>
      <hr />
      <p style={sectionOne} className="header-part-one">
        World Wide Web: Compiled and Published by K. VINER & CO, No. 90, York
        Way.
      </p>
      <hr style={headerDivider} />
      <div style={flexContainer} className="header-part-two">
        <div style={flexItem}>
          <p class="small-caps header-left">No. 54, 337.</p>
        </div>
        <div style={flexItem}>
          <p style={{ textAlign: "center" }} class="small-caps">
            {dayOfTheWeek}, {month} {dayOfTheMonth}, {year}.
          </p>
        </div>
        <div style={ctaContainerStyles}>
          <LinkButton
            href="https://support.theguardian.com/subscribe?acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%221821_mode%22%2C%22campaignCode%22%3A%221821_mode%22%7D&INTCMP=1821_mode"
            priority="tertiary"
            size="xsmall"
            cssOverrides={ctaStyles}
          >
            Subscribe
          </LinkButton>
          <LinkButton
            href="https://support.theguardian.com/contribute?acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_HEADER%22%2C%22componentId%22%3A%221821_mode%22%2C%22campaignCode%22%3A%221821_mode%22%7D&INTCMP=1821_mode"
            priority="tertiary"
            size="xsmall"
            cssOverrides={ctaStyles}
          >
            Contribute
          </LinkButton>
          </div>
      </div>

      <hr style={headerDivider} />
    </header>
  );
}

const headerStyle = {
  paddingBottom: "10px",
};

const sectionOne = {
  textAlign: "center",
  fontStyle: "italic",
};

const flexContainer = {
  display: "flex",
  flexWrap: "nowrap",
  fontWeight: "bold",
};

const flexItem = {
  flex: "1",
};

const ctaContainerStyles = {
    flex: "1",
    textAlign: "right",
}

const headerDivider = {
  border: "1.5px solid black",
  backgroundColor: "black",
  borderRadius: "10px",
};

const ctaStyles = {
    color: 'black',
    textAlign: 'center',
    marginLeft: '0.2em',
    '&:hover': {
        backgroundColor: '#333333',
        borderColor: '#333333',
        color: 'white'
    }
}
export default Header;
