import styles from '@/styles/WorkCard.module.css'

export default function WorkCard(  props  ) {
    return (
        <div className={styles.workHistoryContainer}>
                        <h1 className={styles.headerProfile}>{props.job}</h1>
                        <p className={styles.workHistoryDate}>{props.date}</p>
                        <p className={styles.bioText}>{props.description} </p>
                        <ul className={styles.listContainer}>
                            <li className={styles.listPoints}>{props.skills}</li>
                            <li className={styles.listPoints}>{props.skills}</li>
                            <li className={styles.listPoints}>{props.skills}</li>
                        </ul>
        </div>
    )
}