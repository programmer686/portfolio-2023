import styles from '@/styles/Portfolio.module.css'
import LukesImage from "../comps/images/Fotor_AI.jpeg"
import Image from 'next/image'
import SkipsImage from '../comps/images/skips.jpg'
import KombuchaImage from '../comps/images/Kombucha.jpeg'
import JazzImage from '../comps/images/jazz.jpeg'
import FCC from '../comps/images/fcc.png'
import FCCJavascript from '../comps/images/fccJavascript.png'
import Scrimba from '../comps/images/Scrimba.jpg'
import prisma from 'lib/prisma'
import { useState } from 'react'
import WorkCard from '@/comps/cards/WorkCard'
import { nanoid } from 'nanoid'
import EducationCard from '@/comps/cards/EducationCard'


import { isTemplateSpan } from 'typescript'

export async function getServerSideProps() {
    const workData = await prisma.workExperience.findMany()
    const educationData = await prisma.education.findMany()

    

    return {
        props: {
            workData: workData,
            educationData: educationData
        }
    }
}

export default function Portfolio ( { workData, educationData } ) {
    const [dataWork, setDataWork] = useState(workData)
    const [dataEducation, setDataEducation] = useState(educationData)
    console.log(educationData)
    const workCard = dataWork.map(item => {
        return (
            <WorkCard
            key={nanoid()}
            job={item.Job}
            date={item.Date}
            description={item.Description}
            skill1={item.Skill1}
            skill2={item.Skill2}
            skill3={item.Skill3}
            />
        )
    })

    const educationCard = dataEducation.map(item => {
        return (
            <EducationCard
            key={nanoid()}
            school={item.school}
            date={item.date}
            place={item.Place}
            description={item.Description}
            />
        )
    })
    
    return (
        <main className={styles.main}>
            <section className={styles.header}>
                <div className={styles.headerInfoContainer}>
                
                </div>
                <div className={styles.headerBioContainer}>
                    <p className={styles.headerBioName}>Luke Smith</p>
                    <div className={styles.bioContainer}>
                        <h1 className={styles.headerProfile}>Profile</h1>
                        <p className={styles.headerProfileText}>Motivated and wanting to learn, I am working up the ladder in the IT world. With skills in HTML5, CSS3, Javascript and more, I build websites, but I am always looking to learn and build something outside my area of experties.</p>
                    </div>
                </div>
            </section>
            <section className={styles.historyContainer}>
            <h1 className={styles.employmentHistory}>Employment History</h1>
                <div className={styles.historyContainer}>
                    {workCard}
                    <div className={styles.educationImagesContaienr}>
                        <div className={styles.educationContainer}>
                            {educationCard}
                        </div>
                        
                        <div className={styles.imageContainer}>
                        <Image alt='jazz image' className={styles.image} src={JazzImage}/>
                        <Image alt='kombucha image' className={styles.image} src={KombuchaImage}/>
                        <Image alt='skips image' className={styles.image} src={SkipsImage}/>
                        </div>
                    </div>
                    <div className={styles.certificateMainContainer}>
                    <h1 className={styles.certficates}>Certificates</h1>
                        <div className={styles.certificateContaienr}>
                            <Image alt='FreeCodeCamp certificate' className={styles.FCC} src={FCC}/>
                            <Image alt='Scrimba Certificate' className={styles.Scrimba} src={Scrimba}/>
                            <Image alt='Scrimba Certificate' className={styles.FCC} src={FCCJavascript}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}