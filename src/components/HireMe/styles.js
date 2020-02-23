import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
  height: 350px;
  width: auto;
  padding-top: 40px;
`;

export const Icon = styled.img`
  height: 79px;
  width: 79px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 18px;

  width: 50%;
`;

export const LinkMail = styled.a`
  :visited,
  :active {
    color: ${props => props.theme.colors.orange};
  }

  text-decoration-line: none;
  color: ${props => props.theme.colors.orange};
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  /* background-color: ${props => props.theme.colors.gray}; */
  width: 200px;

  margin-top: 50px;
`;

export const Link = styled.a`
  :visited,
  :link {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;
