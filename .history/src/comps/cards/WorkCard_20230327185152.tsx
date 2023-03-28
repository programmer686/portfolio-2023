import styles from '@/styles/WorkCard.module.css'
import Image from 'next/image'


export default function WorkCard(  props  ) {
    return (
        <div className={styles.workHistoryContainer}>
                        <img className={styles.image} alt="" width={500} height={250} src={props.date}/>
                        <h1 className={styles.headerProfile}>{props.job}</h1>
                        <p className={styles.bioText}>{props.description} </p>
                        <ul className={styles.listContainer}>
                            <li className={styles.listPoints}>{props.skill1}</li>
                            <li className={styles.listPoints}>{props.skill2}</li>
                            <li className={styles.listPoints}>{props.skill3}</li>
                        </ul>
        </div>
    )
}