import styles from './header.module.scss'
import headerImage from '../../assets/images/header.png'

export const Header = () => {

    return(
        <header id="hjem" className={StyleSheet.header}>
            <img src={headerImage} alt="Leo-Lov Header" className={styles.headerImage}/>
            <div className={styles.textContainer}>
                <h1>
                    <span className={styles.leo}>Leo</span>
                    <span className={styles.lov}>-Lov</span>
                </h1>
                <p className={styles.subtitle}>
                    Lov og ret kan være et plaster! Hvis du ellers har knaster!
                </p>
            </div>
        </header>
    )
}