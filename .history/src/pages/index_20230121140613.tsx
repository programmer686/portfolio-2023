
import { Inter } from '@next/font/google'
import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import ProjectCard from '@/comps/ProjectCard'
const inter = Inter({ subsets: ['latin'] })

const prisma = new PrismaClient()

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
    
    </>
  )
}

