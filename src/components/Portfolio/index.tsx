import * as Styled from './styles';
import projects from './data';
import Project from '@components/Project';

const Portfolio: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Portfolio</h1>
        <h3>These projects has my code running on.</h3>
      </Styled.Heading>

      <Styled.Content>
        <Styled.Projects>
          {projects.map(project => 
            <Project 
              key={project.title} 
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          )}
        </Styled.Projects>

        <Styled.Github>
            <img src="/github.svg" alt="Github Icon" />
            <p>Github Projects</p>
            <small/>
        </Styled.Github>
      </Styled.Content>
      
    </Styled.Container>
  )
}

export default Portfolio;