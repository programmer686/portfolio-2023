import styles from '@/styles/Portfolio.module.css'
import LukesImage from "../comps/images/Luke.jpeg"
import Image from 'next/image'
import SkipsImage from '../comps/images/skips.jpg'
import KombuchaImage from '../comps/images/Kombucha.jpeg'
import JazzImage from '../comps/images/jazz.jpeg'
import FCC from '../comps/images/fcc.png'
import Scrimba from '../comps/images/Scrimba.jpg'
import prisma from 'lib/prisma'

export async function getServerSideProps() {
    const workData = await prisma.workexperience.findMany()
}

export default function Portfolio () {
    return (
        <main className={styles.main}>
            <section className={styles.header}>
                <div className={styles.headerInfoContainer}>
                    <Image alt='header image' width={300} src={LukesImage}/>
                    <div>
                        <h1 className={styles.headerH1}>IT & Frontend Development</h1>
                        <p className={styles.headerP}>programmer686@gmail.com</p>
                        <p className={styles.headerP}>33 2163 3955</p>
                        <p className={styles.headerP}>Guadalajara, Mexico</p>
                        <p className={styles.headerP}>Nationality: Mexican</p>
                    </div>
                </div>
                <div className={styles.headerBioContainer}>
                    <p className={styles.headerBioName}>Luke Smith</p>
                    <div>
                        <h1 className={styles.headerProfile}>Profile</h1>
                        <p className={styles.headerProfileText}>Motivated and wanting to learn, I am working up the ladder in the IT world. With skills in HTML5, CSS3, Javascript and more, I build websites, but I am always looking to learn and build something outside my area of experties.</p>
                    </div>
                </div>
            </section>
            <section className={styles.historyContainer}>
            <h1 className={styles.employmentHistory}>Employment History</h1>
                <div className={styles.historyContainer}>
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
                    <div className={styles.workHistoryContainer}>
                        <h1 className={styles.headerProfile}>Owner at Luke's Kombucha</h1>
                        <p className={styles.workHistoryDate}>07/2019-05/2022</p>
                        <p className={styles.bioText}>I started Luke's Kombucha in the summer of 2019 selling at first only twelve bottles at a time, using crane to write the name, to making 50+ at a time with proper bottles with a clean label with the a logo. Doing this work I learned: </p>
                        <ul className={styles.listContainer}>
                            <li className={styles.listPoints}>Perserverance</li>
                            <li className={styles.listPoints}>Working with others</li>
                            <li className={styles.listPoints}>How to make something from scratch</li>
                        </ul>
                    </div>
                    <div className={styles.educationImagesContaienr}>
                        <div className={styles.educationContainer}>
                            <h1 className={styles.headerProfile}>Education</h1>
                            <p className={styles.bioText}>High School, Davidson Academy, Guadalajara, Jalisco, Mexico</p>
                            <p className={styles.bioText}>Besides highschool I taught my self frontend Development with online resources like FreeCodeCamp and Scrimba</p>
                        </div>
                        <div className={styles.imageContainer}>
                        <Image alt='jazz image' className={styles.image} src={JazzImage}/>
                        <Image alt='kombucha image' className={styles.image} src={KombuchaImage}/>
                        <Image alt='skips image' className={styles.image} src={SkipsImage}/>
                        </div>
                    </div>
                    <div>
                    <h1 className={styles.certficates}>Certificates</h1>
                        <div className={styles.certificateContaienr}>
                            <Image alt='FreeCodeCamp certificate' className={styles.FCC} src={FCC}/>
                            <Image alt='Scrimba Certificate' className={styles.Scrimba} src={Scrimba}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}