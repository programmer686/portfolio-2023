import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from '@/styles/Layout.module.css'


export default function Layout({children}) {
    return (
        <>
            <Navbar/>
                <main className={styles.body}>{children}</main>
                <h1></h1>
            <Footer/>
        </>
    )
}