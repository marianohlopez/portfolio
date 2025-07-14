import "./projects.css"
import Button from 'react-bootstrap/Button';
import { pipelines } from "../../data/projects"
import { webDashboards } from "../../data/projects"

const DataProjects = () => {
  return (
    <>
      <h3 id="projects" className="title">Proyectos de Datos</h3>
      <div className="projectsCont">
            {pipelines.map((project) => (
                <div className="projectImg" key={project.name}>
                    <img src={project.image} alt={project.alt} />
                    <div>
                        <p>{project.name}</p>
                        <span>
                            <Button href={project.githubLink} target="_blank"
                                variant="outline-secondary">CODE</Button>
                        </span>
                    </div>
                </div>
            ))}
            {webDashboards.map((project) => (
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

export default DataProjects
