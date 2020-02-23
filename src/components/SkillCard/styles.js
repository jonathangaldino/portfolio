import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.colors.lightergray};
  width: 350px;
  height: 305px;
  margin-right: 30px;
  border-radius: 4px;
`;

export const Icon = styled.img`
  margin-top: -45px;
  width: 79px;
  height: 79px;
`;

export const Title = styled.h3`
  margin-top: 15px;
  color: ${props => props.theme.colors.purple};
  font-weight: bold;
  font-size: 18px;
`;

export const TechList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
`;

export const Star = styled.img`
  width: 32px;
  height: 32px;
`;

export const Tech = styled.li`
  display: flex;
  align-items: center;
`;

export const TechName = styled.p`
  color: ${props => props.theme.colors.darkpurple};
  font-size: 18px;
`;
