import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            {/* <h1 className={styles.title}>Mafê e Nikolai</h1> */}
            <div className={styles.content}>
                <img 
                    src={require("../../assets/about/about.png")} 
                    alt="about" 
                    className={styles.aboutImage} 
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                       
                        <div className={styles.aboutItemText}>
                            <h3>Titulo genérico</h3>
                            <p>
                                Mensagem bonita falando que esperamos a presença de todos sei lá algo assim
                            </p>
                        </div>
                    </li>
                    
                   
                </ul>
            </div>
        </section>
    );
}