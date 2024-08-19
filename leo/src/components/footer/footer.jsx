import styles from './footer.module.scss';
import facebookIcon from '../../assets/images/facebookw.png';
import linkedinIcon from '../../assets/images/linkedinw.png';

export const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftContent}>
                        <h3>Adresse</h3>
                        <p>Find os her:</p>
                        <p>Maldive rd. 22,<br />Seychelle Islands</p>
                    </div>
                    <div className={styles.rightContent}>
                        <h3>Kontakt</h3>
                        <p>Kontakt os her:</p>
                        <p>email@mail.dk<br />Tlf: 0192 3023</p>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.leftContent}>
                        <h3>Politik</h3>
                        <p>Vores politikker:</p>
                        <p>Privatlivspolitk<br />Cookiepolitik<br />Generelle betingelser</p>
                    </div>
                    <div className={styles.rightContent}>
                        <h3>Social Media</h3>
                        <div className={styles.socialIcons}>
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}