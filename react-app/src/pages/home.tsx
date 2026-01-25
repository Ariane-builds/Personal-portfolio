import pp from '../assets/images/p1.png';
import p1 from '../assets/images/IL Paycheck Calculator_ Discover the Top 5 Easy-to-use Tools!.jpg';
import p2 from '../assets/images/jogging.jpg';
import p3 from '../assets/images/Getting Things Done with Todoist Productivity Tips.jpg';
import ProjectCard from '../components/projectcards';
import styles from './home.module.css';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import Skills from "../components/skills";
// import Leftsidedcard from "../components/leftsidedcard";
// import Rightsidedcard from "../components/rightsidedcard";
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

// const education = [
//     {
//     university: "ALX",
//     degree:"Data sciene associate degree",
//     date: "2022-2024",
//     description: "did data science at ALX"
// }, 
//     {
//     university: "African Leadership University",
//     degree:"Bachelor of Science in Software Engineering",
//     date: "2023-2025",
//     description: "Studied Software Engineering at African Leadership University, gaining practical experience through real-world, project-based work."
// },  {
//     university: "University of Arkansas",
//     degree:"Bachelor of Science in Computer Science",
//     date: "2025-2028",
//     description: "Computer Science student with a strong foundation in data structures, algorithms, and software development. Experienced in applying these concepts through academic and personal projects."
// },
// ]

function Home (){
    return(
        <>
        <div className={styles.all}>
        <section id="Home">
            <div className={styles.introduction}>
                <div>
                    <h1>Hi, I’m Ariane.</h1>
                    <p>I’m Ariane, a Computer Science student focused on building user-friendly web applications and solving real-world problems through code.</p>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/hirwa-ariane-3664281b0/">
                            <Linkedin color="#0A66C2" className={styles.icon}/> LinkedIn
                        </a>
                        <a href="https://github.com/Ariane-builds">
                            <Github color="grey" className={styles.icon}/> Github
                        </a>
                        <a href="https://docs.google.com/document/d/1R1pA6i0rmD3KT2O0_SzjpP2Ujz1pnAOOduO5gGs7mTU/edit?usp=sharing">
                            <ArrowDownToLine className={styles.icon}/> Check Resume
                        </a>
                    </div>
                </div>
                <img src={pp} alt="profile picture" />
            </div>
        </section>
        <section id="About">
            <div className={styles.about}>
                <h3>Skills</h3>
                <div>
                <Skills/>
                </div>
            </div>
        </section>
        <section id="Projects">
            <div className={styles.projects}>
                <h2>Projects</h2>
                <div className={styles.projectsfirst}>{projects.map((item)=> <ProjectCard key={item.name} image={item.image} name={item.name} link={item.link} description={item.description} />)}</div>
            </div>
        </section>
        <section id="Contact">
            <div className={styles.contact}>
                <Contact/>
            </div>
        </section>
        </div>
        </>
        
    );
}

export default Home;