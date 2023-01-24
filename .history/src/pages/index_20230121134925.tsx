
import { Inter } from '@next/font/google'
import { PrismaClient } from '@prisma/client'
const inter = Inter({ subsets: ['latin'] })

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const projects = await prisma.project.findMany()

  return(
    props: {
      projectData: typeof projects
    }
  )
}

export default function Home( { projectData } ) {
console.log(projectData)
   
  return (
    <>
    
    </>
  )
}

