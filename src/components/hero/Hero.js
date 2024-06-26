import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>08 • FEV • 2025</h1>
            <p className={styles.description}>
                Sejam bem vindos ao nosso site de casamento!
            </p>

        </div>
        <img src={
            require("../../assets/hero/igrej-2.png")} 
            alt="hero" 
            className={styles.heroImage}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
}
