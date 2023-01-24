import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import prisma from 'lib/prisma'
const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  const data: object[] = await prisma.project.findMany()

  console.log(data)
   
  return (
    <>
    
    </>
  )
}

