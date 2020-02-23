import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Centered, Link } from "./styles";

export const twitterLink = "https://twitter.com/johnzballad";
export const linkedinLink = "https://www.linkedin.com/in/jonathangaldinodev/";
export const githubink = "https://github.com/jonathangaldino";

export default function Header() {
  return (
    <Container>
      <Centered>
        <Link href={twitterLink}>
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </Link>

        <Link href={linkedinLink}>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
        </Link>

        <Link href={githubink}>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </Link>
      </Centered>
    </Container>
  );
}
