import styles from "@/styles/EducationCard.module.css"

export default function EducationCard(props) {
    return (
        <div>
            <h1 className={styles.school}>{props.school}</h1>
            <p>{props.date}</p>
            <p className={styles.palce}>{props.place}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}