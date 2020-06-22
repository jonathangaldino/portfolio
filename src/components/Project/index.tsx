import * as Styled from './styles';
import { IProject } from '../Portfolio/data';

const Project: React.FC<IProject> = ({ title, description, imageSrc }) => {
  return (
    <Styled.Container image={imageSrc}>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </Styled.Container>
  )
}

export default Project;