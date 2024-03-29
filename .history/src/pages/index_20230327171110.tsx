
import { Inter } from '@next/font/google'
import Head from 'next/head'
import styles from "@/styles/Home.module.css"
import prisma from 'lib/prisma'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import ProjectCard from '@/comps/cards/ProjectCard'
const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const projects = await prisma.project.findMany()

  return {
    props: {
      projectData:  projects
    }
}
}

export default function Home( { projectData } ) {
  

  const [data, setData] = useState(projectData)

  const projectCard = data.map(item => {
    return (
      <ProjectCard
      key={nanoid()}
      link={item.projectLink}
      name={item.projectName}
      stack={item.projectStack}
      github={item.projectGithub}
      
      />
    )
  })
   
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <main>
        <section className={styles.main}>
          <h1 className={styles.introName}>Hi, I am <br/>Luke<br/>a Frontend Developer...</h1>
        </section>
        <section className={styles.homeProjectsContainer}>
          <div id='projects' className={styles.projects}>
            {projectCard}
          </div>
        </section>
        <section className={styles.newsContaienr}></section>
      </main></>
  )
}

