

import HeroSection from '../homepagecomponents/hero'
import MembershipsInclude from '../homepagecomponents/membership'

import AvailableCourses from '../homepagecomponents/courses'
import VideoSection from '../homepagecomponents/video'
import PopularCourses from '../homepagecomponents/popularcourses'
import CounterSection from '../homepagecomponents/counter'
import TeachersSection from '../homepagecomponents/teachers'
import PricingSection from '../homepagecomponents/pricing'
import TestimonialSection from '../homepagecomponents/testimonial'
import SignUp from '../homepagecomponents/sign'
import ContactSection from '../homepagecomponents/contact'

const HomePage = () => {
    return (
      <div>
        
        <HeroSection />
        <MembershipsInclude />
        <AvailableCourses />
        <VideoSection />
        <PopularCourses/>
        <CounterSection/>
        <TeachersSection/>
        <PricingSection/>
        <TestimonialSection/>
        <SignUp/>
        <ContactSection/>
      </div>
    );
  };
  
  export default HomePage;
  