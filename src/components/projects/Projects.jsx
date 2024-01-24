import "./projects.css"
import projects from "../../data/projects";
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <>
        <h3 id="projects" className="title">Proyectos</h3>
        <div className="projectsCont">
            {projects.map((project) => (
                <div className="projectImg" key={project.name}>
                    <img src={project.image} alt={project.alt} />
                    <div>
                        <p>{project.name}</p>
                        <span>
                            <Button className='me-3' href={project.githubLink} target="_blank"
                                variant="outline-secondary">CODE</Button>
                            <Button href={project.appLink} target="_blank"
                                variant="outline-secondary">APP</Button>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Projects
