import React, { useState } from "react";
import styles from "./Navbar.module.css";

import CloseIcon from "../../assets/nav/closeIcon.svg";
import MenuIcon from "../../assets/nav/menuIcon.svg";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                M & N 💍
                </a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen
                            ? CloseIcon
                            : MenuIcon
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">Mafê e Nikolai</a>
                    </li>
                    <li>
                        <a href="#evento">Evento</a>
                    </li>
                    <li>
                        <a href="#hotel">Hotel</a>
                    </li>
                    <li>
                        <a href="#projects">Lista de Presentes</a>
                    </li>
                    <li>
                        <a href="#contact">RSVP</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
