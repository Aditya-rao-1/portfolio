
import DashboardLayout from '@/components/DashboardLayout'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
     <DashboardLayout/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page
