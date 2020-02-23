import React from "react";

import { Container, Title, Subtitle, Centered, Habilities } from "./styles";

import { SkillCard } from "../";
import Data from "../../utils/data";

const Skills = () => (
  <Container>
    <Centered>
      <Title>{Data.skillsTitle}</Title>

      <Subtitle>{Data.skillsSubtitle}</Subtitle>

      <Habilities>
        {Data.skills.map(skill => (
          <SkillCard
            key={skill.title}
            icon={skill.image}
            title={skill.title}
            techs={skill.techs}
          />
        ))}
      </Habilities>
    </Centered>
  </Container>
);

export default Skills;
