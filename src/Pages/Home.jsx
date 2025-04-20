import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ButtonGroup from '../components/button'
import GetMentor from '../components/Getmentor'
import Page from './Page'
import Question from './Question'
import Footer from './Footer'
 


const Home = () => {
  return (
    <div>
      <Layout />
      <Hero />
      <ButtonGroup />
      <GetMentor />
      <Page />
      <Question />
      <Footer />
    </div>
  )
}

export default Home