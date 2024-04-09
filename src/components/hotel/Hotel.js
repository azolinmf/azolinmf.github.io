import React from "react";
import styles from "./Hotel.module.css";
import hotel from "../../data/hotel.json";

export const Hotel = () => {
    return (
        <section className={styles.container} id="hotel">
            <h2 className={styles.title}>Hotel</h2>
            <h3 className={styles.description}>Nós temos parceria com esses hotéis etc etc</h3>
            <div className={styles.content}>
                {hotel.map((hot, id) => 
                <li key={id} className={styles.item}>
                    <h3>{hot.name}</h3>
                    <p className={styles.name}>{hot.address}</p>
                    <p className={styles.price}>{hot.price}</p>
                </li>
                )}
            </div>
        </section>
    );
}