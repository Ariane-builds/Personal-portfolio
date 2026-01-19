import styles from './education.module.css';

function Rightsidedcard({university, degree, date, description}: {
  university: string;
  degree: string;
  date: string;
  description: string;
}) {
    return(
        <div className={styles.rightsided}>
            <hr id={styles.line} />
            <div className={styles.university}>
                <h4>{university}</h4>
                <p className={styles.degree}>{degree}</p>
                <p className={styles.date}>{date}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default Rightsidedcard;