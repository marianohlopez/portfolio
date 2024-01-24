import "./skills.css";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <>
        <h3 id="skills" className="title">Habilidades</h3>
        <div className="skillsCont">
            {skills.map((skill) => (
                <div className="imgCont" key={skill.name}>
                    <img src={skill.image} alt={skill.alt} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Skills
