import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const sections = ["Home", "About", "Projects", "Education", "Contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.navbar}>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${active === id ? styles.active : ""}`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
