import About from '@/components/about';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <TechStack />
      <About />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}
