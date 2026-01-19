import styles from './copyright.module.css';

function Copyright() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Ariane
        </footer>
    );
}

export default Copyright;