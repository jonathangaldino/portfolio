import React from "react";

import MyImage from "../../assets/myImage.jpg";

import {
  Container,
  CenteredContainer,
  Image,
  RightSideContainer,
  HiText,
  AboutMe,
  MyNameIs
} from "./styles";

import Data from "../../utils/data";

const About = () => (
  <Container>
    <CenteredContainer>
      <Image src={MyImage} />
      <RightSideContainer>
        <HiText>{Data.introducing}</HiText>

        <MyNameIs>{Data.name}</MyNameIs>

        <AboutMe>{Data.aboutMe}</AboutMe>
      </RightSideContainer>
    </CenteredContainer>
  </Container>
);

export default About;
