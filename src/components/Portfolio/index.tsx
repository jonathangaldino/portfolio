import * as Styled from './styles';
import projects from './data';
import Project from '@components/Project';

const Portfolio: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Portfolio</h1>
        <h3>A few projects I've worked on</h3>
      </Styled.Heading>

      <Styled.Content>
        <Styled.Projects>
          {projects.map(project => 
            <Project 
              key={project.title} 
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              links={project.links}
            />
          )}
        </Styled.Projects>
      </Styled.Content>

      <Styled.Github href="https://github.com/jonathangaldino/" target="__blank">
          <img src="/github.svg" alt="Github Icon" />
          <p>Github Projects</p>
          <small/>
      </Styled.Github>
    </Styled.Container>
  )
}

export default Portfolio;