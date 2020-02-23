import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  /* background-color: ${props => props.theme.colors.gray}; */
  width: 200px;
`;

export const Icon = styled.img`
  width: 25px;
`;

export const Link = styled.a`
  :visited,
  :link {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;
