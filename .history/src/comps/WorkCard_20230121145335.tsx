import styles from '@/styles/WorkCard.module.css'

export default function WorkCard() {
    return (
        <div className={styles.workHistoryContainer}>
                        <h1 className={styles.headerProfile}>Server at Skips Smokehouse Barbecue</h1>
                        <p className={styles.workHistoryDate}>06/2018-03/202</p>
                        <p className={styles.bioText}>At my first job as a server as Skips Smokehouse Barbecue I becamse a jack of all trades. I: </p>
                        <ul className={styles.listContainer}>
                            <li className={styles.listPoints}>Prepared</li>
                            <li className={styles.listPoints}>Smoked</li>
                            <li className={styles.listPoints}>Served</li>
                        </ul>
        </div>
    )
}