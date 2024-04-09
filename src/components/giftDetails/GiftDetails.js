import React from 'react';
import { QrCodePix } from 'qrcode-pix';
import {useEffect, useState} from 'react'
import styles from './GiftDetails.module.css';
import CloseIcon from "../../assets/nav/close.svg";

export const GiftDetails = ({ gift, onClose }) => {
    const [qrCode, setQrCode] = useState('');
    const [rawPix, setRawPix] = useState('');

    useEffect(() => {
        async function generateDynamicPix() {
            const qrCodePix = QrCodePix({
                version: '01',
                key: '+5541998358181', //or any PIX key
                name: 'Maria Fernanda Azolin',
                city: 'CURITIBA',
                message: 'Pagamento PIX',
                cep: '82320120',
                value: gift.value,
            });

            const rawPixStr = qrCodePix.payload();
            const qrCodeBase64 = await qrCodePix.base64();

            setRawPix(rawPixStr);
            setQrCode(qrCodeBase64);
        }

        void generateDynamicPix();
    }, [])

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
                    <div>
                        <h4> R$ {gift.value}</h4>
                    </div>

                    <div className={styles.development}>
                        <h3>Fazer o PIX</h3>
                        <p> Valor do PIX??</p>

                        <img src={qrCode} alt={'QR Code PIX'}/>
                        <p
                            style={{
                                maxWidth: '480px',
                                margin: '0 auto',
                                whiteSpace: 'nowrap',
                                overflow: 'auto'
                            }}
                        >
                            {rawPix}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}