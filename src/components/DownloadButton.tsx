import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const DownloadButton: React.FC<Props> = ({ text }) => (
  <Container href="/JonathanGaldino_CV.pdf" download>
    <img src="/download.svg" alt="Download Icon" />
    <p>{text}</p>
  </Container>
)

const Container = styled.a`
  width: 155px;
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 35px;
  padding: 0px 20px;

  text-decoration: none;
  
  /* border-top-right-radius: 22.5px; */
  /* border-bottom-right-radius: 22.5px; */
  background: ${props => props.theme.colors.texts};

  img {
    width: 26px;
    height: 26px;
  }

  p {
    color: ${props => props.theme.colors.textsInverse};
    margin-left: 20px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default DownloadButton;