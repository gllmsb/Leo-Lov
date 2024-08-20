import React, { useState } from 'react';
import styles from './navbar.module.scss'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#hjem">Hjem</a></li>
                <li className={styles.separator}>|</li>
                <li><a href="#advokaterne">Advokaterne</a></li>
                <li className={styles.separator}>|</li>
                <li><a href="#om-leolov">Om LeoLov</a></li>
                <li className={styles.separator}>|</li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
            <div className={styles.logo}>
                <span className={styles.leo}>Leo</span>
                <span className={styles.lov}>-Lov</span>
            </div>
            
        </nav>
    );
};