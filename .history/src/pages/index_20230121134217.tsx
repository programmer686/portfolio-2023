import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
const inter = Inter({ subsets: ['latin'] })

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const projects = await prisma.project.findMany()
}

export default function Home() {

   
  return (
    <>
    
    </>
  )
}

