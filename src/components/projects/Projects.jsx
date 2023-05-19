import "./projects.css"

const Projects = () => {
  return (
    <>
        <h3 id="projects" className="title">Proyectos</h3>
        <div className="projectsCont">
            <div className="projectImg">
                <img src="./assets/projects/backend-ecommerce.png" alt="backend-ecommerce image" />
            </div>
            <div className="projectImg">
                <img src="./assets/projects/relay.png" alt="relay image" />
                <p>React-app</p>
                <button>link</button>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/ecommerce-maverick.png" alt="ecommerce-maverick image" />
            </div>
            <div className="projectImg">
                <img src="./assets/projects/weather.png" alt="weather image" />
            </div>
            <div className="projectImg">
                <img src="./assets/projects/ecommerce-zingueria.png" alt="ecommerce-zingueria image" />
            </div>
            <div className="projectImg">
                <img src="./assets/projects/currency-converter.png" alt="currency-converter image" />
            </div>
            <div className="projectImg">
                <img src="./assets/projects/yoga.png" alt="yoga image" />
            </div>
{/*             <div className="projectImg">
                <img src="./assets/" alt="mongo icon" />
            </div>
            <div className="projectImg">
                <img src="./assets/" alt="mysql icon" />
            </div>
            <div className="projectImg">
                <img src="./assets/" alt="firebase icon" />
            </div> */}
        </div>
    </>
  )
}

export default Projects
