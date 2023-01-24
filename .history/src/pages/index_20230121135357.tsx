
import { Inter } from '@next/font/google'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react'
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
console.log(data)
   
  return (
    <>
    
    </>
  )
}

