import React from 'react';
import styles from './GiftDetails.module.css';
import CloseIcon from "../../assets/nav/closeIcon.svg";

export const GiftDetails = ({ gift, onClose }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <nav className={styles.navbar}>
                    <img 
                        src={CloseIcon}
                        alt="close" 
                        onClick={onClose}
                    />
                </nav>

                <div className={styles.popupContent}>
                    <div className={styles.title}>
                        {
                            gift.icon !== "" && 
                            <img 
                                src={require(`../../assets/gifts/icons/${gift.icon}`)} 
                                alt={gift.icon}
                                className={styles.icon}
                            />
                        }
                        <h2>{gift.name}</h2>
                    </div>

                    <div className={styles.development}>
                        <h3>Fazer o PIX</h3>
                        <p> Valor do PIX??</p>
                    </div>

                </div>
            </div>
        </div>
    );
}