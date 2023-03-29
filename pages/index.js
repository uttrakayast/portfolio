import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    
      <Navbar />
      <HeroBanner />
      <TechStack />
     
    </>
  )
}
