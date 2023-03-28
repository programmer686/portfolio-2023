import Link from "next/link"
import styles from '@/styles/Navbar.module.css'




export default function Navbar ()  {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>Luke Smith</p>
            <ul className={styles.linkContainer}>
                <li className={styles.link}><Link href="/" className={styles.link}>Home</Link></li>
                <li className={styles.link}><Link href="/Portfolio" className={styles.link}>Portfolio</Link></li>
                <li className={styles.link}><Link href="/Contact" className={styles.link}>Contact</Link></li>
            </ul>
        </nav>
    )
}