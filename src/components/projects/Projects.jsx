import "./projects.css"
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <>
        <h3 id="projects" className="title">Proyectos</h3>
        <div className="projectsCont">
            <div className="projectImg">
                <img src="./assets/projects/app-notes.png" alt="app-notes image" />
                <div>
                    <p>App-Notes</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/app-notes" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://app-notes-pi.vercel.app" target="_blank"
                            variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/backend-ecommerce.png" alt="backend-ecommerce image" />
                <div>
                    <p>API-Ecommerce</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/backend-ecommerce" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://backend-ecommerce-vtjo.onrender.com" target="_blank"
                            variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/relay.png" alt="relay image" />
                <div>
                    <p>Relay-Website</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/relay" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://relay.com.ar/" target="_blank"
                            variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/ecommerce-maverick.png" alt="ecommerce-maverick image" />
                <div>
                    <p>Maverick-Ecommerce</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/Ecommerce-Lopez" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://ecommerce-lopez.vercel.app/" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/rick-morty.png" alt="rick-morty image" />
                <div>
                    <p>Rick & Morty App</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/rick-morty" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://rick-morty-chi-sepia.vercel.app/" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/weather.png" alt="weather image" />
                <div>
                    <p>Weather App</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/weather-app" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://weather-app-wheat-psi.vercel.app/" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/ecommerce-zingueria.png" alt="ecommerce-zingueria image" />
                <div>
                    <p>Zingueria-Ecommerce</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/Comercio-Zingueria" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://comercio-zingueria.vercel.app/" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/yoga.png" alt="yoga image" />
                <div>
                    <p>Yoga-Website</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/Proyecto-web" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://yogamariaesther.netlify.app" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
            <div className="projectImg">
                <img src="./assets/projects/currency-converter.png" alt="currency-converter image" />
                <div>
                    <p>Currency Converter</p>
                    <span>
                        <Button className='me-3' href="https://github.com/marianohlopez/currency-converter" target="_blank"
                            variant="outline-secondary">CODE</Button>
                        <Button href="https://currency-converter-mhl.netlify.app/" target="_blank"
                                variant="outline-secondary">APP</Button>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects
