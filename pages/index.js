import About from '@/components/about';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Umesh Kumar</title>
      </Head>
      <Navbar />
      <HeroBanner />
      <TechStack />
      <About />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}
