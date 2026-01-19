import styles from './navbar.module.css';


function Navbar() {
    return (
    <nav className = {styles.navbar}>
        <p>Home</p>
        <p>Education</p>
        <p>Projects</p>
        <p>Contact Me</p>
    </nav>
    );
}

export default Navbar;