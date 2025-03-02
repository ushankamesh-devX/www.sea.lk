import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Showcase from '../../components/Showcase/Showcase'
import Spec from '../../components/Spec/Spec'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Landing() {
  return (
    <div className='pt-40'>
        <Hero/>

        <About/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Showcase/>
        <br />
        <br />
        <br />
        <br />
        <Spec/>
        {/* <Contact/> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
    </div>
  )
}

export default Landing