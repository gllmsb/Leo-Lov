import styles from './team.module.scss'

import member1Image from '../../assets/images/icon1.png';
import member2Image from '../../assets/images/icon2.png';
import member3Image from '../../assets/images/icon3.png';
import member4Image from '../../assets/images/icon4.png';


export const Team = () => {

    const teamMembers = [
        {
            image: member1Image,
            name: 'John Harbinger',
            quote: '”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.”'
        },
        {
            image: member2Image,
            name: 'Peter Parker',
            quote: '“Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John"'
        },
        {
            image: member3Image,
            name: 'Elise Li',
            quote: '“Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt."'
        },
        {
            image: member4Image,
            name: 'Morten Nate',
            quote: '“Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”'
        },
    ];

    return(
        <section id="advokaterne" className={styles.teamSection}>
            <h3 className={styles.heading}>MØD HOLDET</h3>
            <div className={styles.cardsContainer}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={member.image} alt={member.name} className={styles.image} />
                        </div>
                        <h3 className={styles.name}>{member.name}</h3>
                        <p className={styles.quote}>{member.quote}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}