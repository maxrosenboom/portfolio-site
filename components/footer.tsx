import React from 'react';
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer-text']}>
                <p>Designed and built by Max Rosenboom</p>
                <p>Copyright © 2023</p>
            </div>
        </div>
    );
}