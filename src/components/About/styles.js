import styled from "styled-components";

export const Container = styled.div`
  height: 450px;
  width: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};
`;

export const CenteredContainer = styled.div`
  display: flex;

  width: auto;
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
  border-radius: 6px;
`;

export const RightSideContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 250px;
`;

export const HiText = styled.p`
  font-size: 20px;
  font-family: "Nunito";
`;

export const MyNameIs = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Rubik";
`;

export const AboutMe = styled.p`
  width: 550px;
  font-size: 16px;
  font-weight: light;
  font-family: "Nunito";
`;
