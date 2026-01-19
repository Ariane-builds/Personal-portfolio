import styles from './projectcards.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";



function ProjectCards({image, name, description, link}) {
    return(
        <div className={styles.projectdetail}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}>Visit <FaExternalLinkAlt /></a>
        </div>
    );
}

export default ProjectCards;