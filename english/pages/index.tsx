import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '../components/banner';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    
        <Header />
        <Banner />
       
      
    </main>
  )
}
