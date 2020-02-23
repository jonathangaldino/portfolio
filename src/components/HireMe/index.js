import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Icon,
  Title,
  Description,
  LinkMail,
  Socials,
  Link
} from "./styles";

import { linkedinLink, twitterLink, githubink } from "../Header/";

import launchIcon from "../../assets/launch.png";

import Data from "../../utils/data";

const HireMe = () => (
  <Container>
    <Icon src={launchIcon} />

    <Title>{Data.contactTitle}</Title>

    <Description>
      Looking for someone to help build and deliver software in your team? Talk
      to me, by dropping a email to{" "}
      <LinkMail a href="mailto:jobs@galdino.dev" target="_top">
        jobs@galdino.dev
      </LinkMail>
      . I promise to answer very quick!
    </Description>

    <Socials>
      <Link href={twitterLink}>
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
      </Link>

      <Link href={linkedinLink}>
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
      </Link>

      <Link href={githubink}>
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </Link>
    </Socials>
  </Container>
);

export default HireMe;
