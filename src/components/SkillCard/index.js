import React from "react";

import {
  Container,
  Icon,
  Title,
  TechList,
  Star,
  Tech,
  TechName
} from "./styles";

import starImage from "../../assets/star.png";

const SkillCard = ({ title, icon, techs }) => (
  <Container>
    <Icon src={icon} />

    <Title>{title}</Title>

    <TechList>
      {techs.map(tech => (
        <Tech key={tech}>
          <Star src={starImage} />
          <TechName>{tech}</TechName>
        </Tech>
      ))}
    </TechList>
  </Container>
);

export default SkillCard;
