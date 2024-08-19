import styles from './address.module.scss'

export const Address = () => {
    return (
        <section className={styles.addressSection}>
            <div className={styles.innerContainer}>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6951320295495!2d9.921552115898558!3d57.04845568092807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932d67cb4aead%3A0x9083f7694f8b913!2sMcDonald&#39;s!5e0!3m2!1sen!2sdk!4v1693417110727!5m2!1sen!2sdk"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nytorv McDonald's, Aalborg"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>HER BOR VI</h3>
                    <p className={styles.description}>
                        Vi har valgt at bosætte os i solen! <br />
                        Her er dejlig varmt og ikke ret mange fattige mennesker. Det <br />nyder vi rigtig meget. <br />
                        “Hvis du har råd til at tage til Sechellerne har du råd til os”. <br />Det er et af vores utallige motto´er
                    </p>
                    <p className={styles.address}>
                        Leo-Lov ApS <br />
                        Maldive rd. 22 <br />
                        Seychelles
                    </p>
                </div>
            </div>
        </section>
    );
};