import Link from "next/link";
import styles from '@/styles/Footer.module.css'


export default function Footer() {
    return (
        <>
            <div className={styles.topBorder}></div>
            <footer className={styles.main}>
                
                <section className={styles.sectionsContact}>
                    <p className={styles.getInContact}>Get in Contact</p>
                    <input className={styles.email} placeholder="Enter Your Email..."/>
                </section>
                <div className={styles.seperator}></div>
                <section className={styles.sections}>
                    <div className={styles.linksContainer}>
                        <p className={styles.linksName}>Site Map</p>
                        <ul className={styles.linkContainer}>
                            <li className={styles.link}><Link className={styles.link} href="/">Home</Link></li>
                            <li className={styles.link}><Link className={styles.link} href="/Portfolio">Portfolio</Link></li>
                            <li className={styles.link}><Link className={styles.link} href="/Projects">Projects</Link></li>
                            <li className={styles.link}><Link className={styles.link} href="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.linksContainer}> 
                        <p className={styles.linksName}>Social Medias</p>
                        <ul className={styles.linkContainer}>
                            <li className={styles.link}>Github</li>
                            <li className={styles.link}>Instagram</li>
                            <li className={styles.link}>Facebook</li>
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    )
}