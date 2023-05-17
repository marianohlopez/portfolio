import "./skills.css"

const Skills = () => {
  return (
    <>
        <h3 className="skillsTitle">Habilidades</h3>
        <div id="skills" className="skillsCont">
            <div className="imgCont">
                <img src="./assets/html.png" alt="html icon" />
                <p>HTML</p>
            </div>
            <div>
                <img src="./assets/css.png" alt="css icon" />
                <p>CSS</p>
            </div>
            <div>
                <img src="./assets/javascript.png" alt="js icon" />
                <p>JAVASCRIPT</p>
            </div>
            <div>
                <img src="./assets/react.png" alt="react icon" />
                <p>REACT</p>
            </div>
            <div>
                <img src="./assets/github.png" alt="github icon" />
                <p>GITHUB</p>
            </div>
            <div>
                <img src="./assets/node.png" alt="node icon" />
                <p>NODEJS</p>
            </div>
            <div>
                <img src="./assets/mongo.png" alt="mongo icon" />
                <p>MONGO</p>
            </div>
            <div>
                <img src="./assets/firebase.png" alt="firebase icon" />
                <p>FIREBASE</p>
            </div>
        </div>
    </>
  )
}

export default Skills
