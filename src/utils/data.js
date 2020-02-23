import backendImage from "../assets/backend.png";
import frontAndMobileImage from "../assets/front-mobile.png";
import othersImage from "../assets/others.png";

const data = {
  introducing: "Hello, my name is",
  name: "Jonathan Galdino",
  aboutMe:
    "I am a backend developer at PlayerUm. I create solutions using Node.js, React & React Native. Sometimes I do freelancing as well. Check my skills below.",
  skillsTitle: "Skills Overview",
  skillsSubtitle:
    "I've been building rich web & mobile applications for the past 2 years, mostly for clients in Brazil. Below is a quick overview of my main technical skill set and tools I use.",
  skills: [
    {
      title: "Backend",
      image: backendImage,
      techs: [
        "Node.js",
        "Express.js & Koa.js",
        "PostgresSQL & MySQL",
        "MongoDB & Redis",
        "Jest 4 Tests"
      ]
    },
    {
      title: "Frontend / Mobile",
      image: frontAndMobileImage,
      techs: [
        "React.js",
        "Redux",
        "Styled-components",
        "CSS/LESS",
        "React Native"
      ]
    },
    {
      title: "Others",
      image: othersImage,
      techs: [
        "Typescript",
        "Wireframing",
        "Docker",
        "EcmaScript 2015/6/7",
        "GraphQL"
      ]
    }
  ],
  contactTitle: "Wanna hire me",
  mailTo: "jobs@galdino.dev",
  contactSubtitle: `Looking for someone to help build and deliver software in your team? Talk to me, by dropping na email to jobs@galdino.dev. I promise to answer very quick!`
};

export default data;
