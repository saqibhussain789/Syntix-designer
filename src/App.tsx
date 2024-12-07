import { useState } from 'react'
import './index.css'
import './App.css'
import Header from './components/header'
import HeroSection from './components/hero'
import MembershipsInclude from './components/membership'
import Footer from './components/footer'
import AvailableCourses from './components/courses'
import VideoSection from './components/video'
import PopularCourses from './components/popularcourses'
import CounterSection from './components/counter'
import TeachersSection from './components/teachers'
import PricingSection from './components/pricing'
import TestimonialSection from './components/testimonial'
import SignUp from './components/sign'
import ContactSection from './components/contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    <MembershipsInclude/>
    <AvailableCourses/>
    <VideoSection/>
    <PopularCourses/>
    <CounterSection/>
    <TeachersSection/>
    <PricingSection/>
    <TestimonialSection/>
    {/* <SignUp/> */}
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default App
