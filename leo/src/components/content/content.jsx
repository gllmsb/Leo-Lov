import styles from './content.module.scss'

export const Content = (props) => {
        const { image, title, description, additionalInfo, reverse } = props;
        const containerClass = reverse ? styles.reverse : '';

    return (
        <section id="om-leolov" className={styles.contentSection}>
            <div className={`${styles.innerContainer} ${containerClass}`}>
                <div className={styles.picture}>
                    <img src={image} alt="content visual" />
                </div>
                <div className={styles.textContent}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.additionalInfo}>{additionalInfo}</p>
                </div>
            </div>
        </section>
    );
};