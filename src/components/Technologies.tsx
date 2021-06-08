import styled from "styled-components";
import media from "styled-media-query";

interface Tech {
  [key: string]: string;
}

const techs: Tech = {
  node: "/techs/nodejs.svg",
  typescript: "/techs/typescript.svg",
  mongodb: "/techs/mongodb.svg",
  react: "/techs/react.svg",
  git: "/techs/git.svg",
  jest: "/techs/jest.svg",
  express: "/techs/express.svg",
  redis: "/techs/redis.svg",
  socketio: "/techs/socket.io.svg",
  serverless: "/techs/serverless.svg",
  nginx: "/techs/nginx.svg",
  vscode: "/techs/vscode.svg",
};

const Technologies = () => {
  return (
    <Container>
      <h1>Technologies</h1>

      <div>
        {Object.keys(techs).map((tech) => (
          <span>
            <img src={techs[tech]} alt="Browser" />
          </span>
        ))}
      </div>
    </Container>
  );
};

export default Technologies;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    align-self: center;
    text-transform: uppercase;
    font-size: 48px;
    margin-bottom: 110px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-row-gap: 35px;
    grid-column-gap: 35px;

    ${media.lessThan("medium")`
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
    `}

    ${media.lessThan("small")`
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(2, 100px);
    `}

    span {
      background: ${(props) => props.theme.colors.skillbg};
      width: 120px;
      height: 120px;
      border-radius: 50%;

      img {
        padding: 20px;
        height: 120px;
        width: 120px;
      }
    }
  }
`;
