
import DashboardLayout from '@/components/DashboardLayout'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <main>
      <Nav/>
      <section id="home">
        <Hero/>
      </section>
     <DashboardLayout/>
      <section>
        <Skills/>
      </section>
      <Experience/>
      <section id="projects">
        <Projects/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default page
