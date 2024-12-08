// src/App.tsx
import './index.css';
import './App.css';
import Header from './homepagecomponents/header';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import CoursesPage from './pages/courses';
import CourseDetailPage from './pages/coursedetails';
import TestimonialPage from './pages/testimonial';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import Footer from './homepagecomponents/footer';

// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* All components are wrapped inside BrowserRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* <Route path="/memberships" element={<MembershipsInclude />} />
        <Route path="/courses" element={<AvailableCourses />} />
        <Route path="/video" element={<VideoSection />} />
        <Route path="/popular-courses" element={<PopularCourses />} />
        <Route path="/counter" element={<CounterSection />} />
        <Route path="/teachers" element={<TeachersSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/testimonials" element={<TestimonialSection />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<ContactSection />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
