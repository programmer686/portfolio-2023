import styles from '@/styles/WorkCard.module.css'
import Image from 'next/image'
import image from "../images/barbecue.jpg"

export default function WorkCard(  props  ) {
    return (
        <div className={styles.workHistoryContainer}>
                        <Image alt="" width={100} height={100} src={image}/>
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