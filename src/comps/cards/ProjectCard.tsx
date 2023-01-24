import styles from "@/styles/ProjectCard.module.css"

export default function ProjectCard(props) {
    return (
        <div className={styles.container}>
            <iframe src={props.link} className={styles.iframe}></iframe>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.stack}>{props.stack}</p>
            <a className={styles.github} href={props.github} target="_blank">Github</a>
        </div>
    )
}