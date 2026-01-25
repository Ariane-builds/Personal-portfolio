import {useState } from "react";
import styles from "./skills.module.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiTypescript,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiFigma,
} from "react-icons/si";

function Skills(){
    // const categories = ["languages", "databases", "front", "end", "tools"];
    const [active, setActive] = useState("languages");
    return(
        <div>
        <div className={styles.category}>
            <button className={active === "languages" ? styles.active : ""} onClick={()=> setActive("languages")}>Programming languages</button>
            <button className={active === "front" ? styles.active : ""} onClick={()=> setActive("front")} >Front-end</button>
            <button className={active === "back" ? styles.active : ""} onClick={()=> setActive("back")}>Back-end</button>
            <button className={active === "databases" ? styles.active : ""} onClick={()=> setActive("databases")}>Databases</button>
        </div>
        <div>
            {active === "languages" && 
            <div className={styles.languages}>
                        <div><FaPython className={styles.skill}/> Python</div>
                        <div><SiTypescript className={styles.skill}/> Typescript</div>
                        <div>C#</div>
            </div>}
            {active === "front" && 
            <div className={styles.languages}>
                    <div><FaHtml5 className={styles.skill}/>HTML</div>
                    <div><FaCss3Alt className={styles.skill}/>CSS</div>
                    <div><FaJs className={styles.skill}/>Javascript</div>
                    <div><FaReact className={styles.skill}/>React</div>
            </div>}
            {active === "back" && 
            <div className={styles.languages}>
                    <div><FaNodeJs className={styles.skill}/>NodeJS</div>
                    <div><SiFlask className={styles.skill}/>Flask</div>
                    <div><SiExpress className={styles.skill}/>Express</div>
                    <div><SiBootstrap className={styles.skill}/>Bootstrap</div>
            </div>}
            {active === "databases" && 
            <div className={styles.languages}>
                    <div><SiMysql className={styles.skill}/>Mysql</div>
                    <div><SiPostgresql className={styles.skill}/>Postgresql</div>
                    <div><SiMongodb className={styles.skill}/>MongoDB</div>
            </div>}

            {active === "tools" && 
            <div className={styles.languages}>
                <div><FaGitAlt className={styles.skill}/>GIT</div>
                <div><FaGithub className={styles.skill}/>Github</div>
                <div><FaAws className={styles.skill}/>AWS</div>
                <div><SiFigma className={styles.skill}/>Figma</div>
            </div>}
        </div>
        </div>
    );
}

export default Skills;