import React from 'react'

import Head from './../components/Head'
import Cursor from './../components/Cursor'
import SmoothScroll from './../components/SmoothScroll'
import Navbar from './../components/Navbar/Navbar'
import HomeComponent from './../components/Home/Home'
import AboutComponent from './../components/About/About'
import WorkComponent from './../components/Work/Work'
import ProjectsComponent from './../components/Projects/Projects'
import ContactComponent from './../components/Contact/Contact'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style'
import 'animate.css/animate.min.css'
import { ContentWrapper } from './../styles/theme.config'

const Home: React.FC = () => {
  globalStyle()

  return (
    <ContentWrapper>
      <Navbar location="portfolio" />
      <Head title="Arya Soni" />
      <Cursor />
      <SmoothScroll />
      <HomeComponent />
      <AboutComponent />
      <WorkComponent />
      <ProjectsComponent />
      <ContactComponent />
      <Footer />
    </ContentWrapper>
  )
}

export default Home
