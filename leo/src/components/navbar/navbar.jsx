import styles from './navbar.module.scss'

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
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