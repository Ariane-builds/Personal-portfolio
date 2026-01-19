import pp from '../assets/images/pp.jpg';
import p1 from '../assets/images/IL Paycheck Calculator_ Discover the Top 5 Easy-to-use Tools!.jpg';
import p2 from '../assets/images/jogging.jpg';
import p3 from '../assets/images/Getting Things Done with Todoist Productivity Tips.jpg';
import ProjectCard from '../components/projectcards';
import styles from './home.module.css';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import Leftsidedcard from "../components/leftsidedcard";
import Rightsidedcard from "../components/rightsidedcard";
import Contact from "../components/contact";

const projects = [
    {
    name: "Transaction Analyzer",
    image: p1,
    description: "dkd",
    link: "im"
    },
    {
    name: "Time Fit",
    image: p2,
    description: "dkd",
    link: "im"
    },
    {
    name: "Chemistry Editor",
    image: p3,
    description: "dkd",
    link: "im"
    }
]

const education = [
    {
    university: "ALS",
    degree:"Data sciene associate degree",
    date: "2022-2024",
    description: "did data science at ALX"
}, 
    {
    university: "ALX",
    degree:"Data sciene associate degree",
    date: "2022-2024",
    description: "did data science at ALX"
}, 
    {
    university: "ALU",
    degree:"Data sciene associate degree",
    date: "2022-2024",
    description: "did data science at ALX"
}
]

function Home (){
    return(
        <>
        <div className={styles.introduction}>
            <img src={pp} alt="profile picture" />
            <div>
                <h1>Hi, I’m Ariane.</h1>
                <p>I’m Ariane, a Computer Science student focused on building user-friendly web applications and solving real-world problems through code.</p>
                <div>
                    <a href="">
                        <Linkedin color="#0A66C2" size={30}/> LinkedIn
                    </a>
                    <a href="">
                        <Github color="grey" size={30}/> Github
                    </a>
                    <a href="">
                        <ArrowDownToLine /> Check Resume
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.about}>
            <h2>About Me</h2>
            <p>Hi, I’m Ariane. I build practical, user-friendly software and enjoy turning ideas into working solutions. Take a look at some of the projects I’ve been working on.</p>
            <h3>Skills</h3>
            <div className={styles.skills}>
                <IoLogoJavascript size={75}/>
                <FaPython size={75}/>
                <FaReact size={75}/>
                <FaHtml5 size={75}/>
                <FaCss3Alt size={75}/>
                < SiFlask size={75}/>
                < DiMysql size={75}/>
            </div>
        </div>
        <div className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.projectsfirst}>{projects.map((item)=> <ProjectCard key={item.name} image={item.image} name={item.name} link={item.link} description={item.description} />)}</div>
        </div>
        <div className={styles.education}>
            <h2>Education</h2>
            {education.map((item, index)=> {
                if (index%2 ==0) {
                    return <Leftsidedcard key={item.university} university={item.university} date={item.date} degree={item.degree} description={item.description}/>;
                }
                return <Rightsidedcard key={item.university} university={item.university} date={item.date} degree={item.degree} description={item.description}/>;
            }
             )}
        </div>
        <div className={styles.contact}>
            <Contact/>
        </div>
        </>
        
    );
}

export default Home;