import styles from './projectcards.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";



function ProjectCards({image, name, description, link}: {
  image: string;
  name: string;
  description: string;
  link: string;
}) {
    return(
        <div className={styles.projectdetail}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}>Live demo <FaExternalLinkAlt /></a>
        </div>
    );
}

export default ProjectCards;