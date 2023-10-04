"use client"
import HomeBanner1 from '@/components/HomeBanner1/HomeBanner1'
import HomeBanner2 from '@/components/HomeBanner2/HomeBanner2'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <HomeBanner1/>
        <HomeBanner2/>
        
        
         </main>
  )
}
