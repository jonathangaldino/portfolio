import * as S from './styles';
import { IProject } from '../Portfolio/data';
import Links from './Links';

const Project: React.FC<IProject> = ({ title, description, imageSrc, links }) => {
  return (
    <S.Container>
      <img src={imageSrc} alt={`${title}`} />

      <S.Content>
        <h1>{title}</h1>
        <h3>{description}</h3>

        <Links {...links} />
      </S.Content>
    </S.Container>
  )
}

export default Project;