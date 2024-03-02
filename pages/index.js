import About from '@/components/about';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar'
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Projects from '@/components/project';

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
      <Projects />
      <Contact />
    </>
  )
}
