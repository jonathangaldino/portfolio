import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 700px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;

  padding-top: 25px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.gray};
  font-weight: bold;
  font-size: 30px;
`;

export const Subtitle = styled.p`
  color: ${props => props.theme.colors.lightgray};
  font-weight: normal;
  font-size: 16px;
  max-width: 625px;
  margin-top: 25px;
`;

export const Habilities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 150px;
  /* background: ${props => props.theme.colors.primary}; */
  height: 500px;
`;
