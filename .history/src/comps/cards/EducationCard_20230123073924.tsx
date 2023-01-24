import styles from "@/styles/EducationCard.module.css"

export default function EducationCard(props) {
    return (
        <div>
            <h1 className={styles.headerProfile}>{props.school}</h1>
            <p>{props.date}</p>
            <p className={styles.bioText}>{props.place}</p>
            <p className={styles.bioText}>{props.description}</p>
        </div>
    )
}