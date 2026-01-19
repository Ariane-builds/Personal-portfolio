import pp from '../assets/images/20251208_145035-removebg-preview.png';
import p1 from '../assets/images/IL Paycheck Calculator_ Discover the Top 5 Easy-to-use Tools!.jpg';
import p2 from '../assets/images/jogging.jpg';
import p3 from '../assets/images/Getting Things Done with Todoist Productivity Tips.jpg';
import ProjectCard from '../components/projectcards';
import styles from './home.module.css';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
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
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiFigma,
  SiPowers,
} from "react-icons/si";

import Leftsidedcard from "../components/leftsidedcard";
import Rightsidedcard from "../components/rightsidedcard";
import Contact from "../components/contact";

const projects = [
    {
    name: "Transaction Analyzer",
    image: p1,
    description: "This is a web-based dashboard for visualizing financial transaction data. Built with Flask on the backend and Chart.js on the frontend, it provides insights through charts, tables, and dynamic filters.",
    link: "https://github.com/Ariane-builds/Transaction-Analyzer"
    },
    {
    name: "Time Fit",
    image: p2,
    description: "Time Fit is a web-based workout generator that creates exercise routines based on user-selected criteria like workout duration, difficulty level, muscles targeted etc.",
    link: "https://timefit-nu.vercel.app/"
    },
    {
    name: "Chemistry Editor",
    image: p3,
    description: "Chem Editor is a simple browser-based editor for writing chemistry notes and equations. It supports basic rich-text formatting and automatic equation processing.",
    link: "https://ariane-builds.github.io/Chemistry-editor/"
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
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/hirwa-ariane-3664281b0/">
                        <Linkedin color="#0A66C2" size={30}/> LinkedIn
                    </a>
                    <a href="https://github.com/Ariane-builds">
                        <Github color="grey" size={30}/> Github
                    </a>
                    <a href="https://docs.google.com/document/d/1R1pA6i0rmD3KT2O0_SzjpP2Ujz1pnAOOduO5gGs7mTU/edit?usp=sharing">
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
                <FaHtml5 size={80}/>
                <FaCss3Alt size={80}/>
                <FaJs size={80}/>
                <FaReact size={80}/>
                <FaPython size={80}/>
                <FaGitAlt size={80}/>
                <FaGithub size={80}/>
                <FaNodeJs size={80}/>
                <FaAws size={80}/>
                <SiTypescript size={80}/>
                <SiTailwindcss size={80}/>
                <SiExpress size={80}/>
                <SiBootstrap size={80}/>
                <SiMysql size={80}/>
                <SiPostgresql size={80}/>
                <SiMongodb size={80}/>
                <SiFlask size={80}/>
                <SiFigma size={80}/>
                <SiPowers size={80}/>
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