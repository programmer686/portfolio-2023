import styles from "@/styles/EducationCard.module.css"

export default function EducationCard(props) {
    return (
        <div className={styles.contaienr}>
            <h1 className={styles.school}>{props.school}</h1>
            <p className={styles.place}>Place: {props.place}</p>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}