import React from 'react';
import styles from './Gifts.module.css';

export const Gifts = ({ gifts, onGiftClick }) => {
  return (
    <div className={styles.container} id="gifts">
        <h2 className={styles.title}>Lista de presentes</h2>
        <div className={styles.content}>
            {gifts.slice().reverse().map((gift, index) => (
                <div key={index} className={styles.giftCard} onClick={() => onGiftClick(gift)}>
                    <img src={require(`../../assets/gifts/cards/${gift.cardPicture}`)} 
                        alt={gift.cardPicture}
                        className={styles.cardPicture}
                    />
                    <h3>{gift.name}</h3>
                    <p>{gift.cardDescription}</p>
                    
                </div>
            ))}
        </div>
    </div>
  );
}