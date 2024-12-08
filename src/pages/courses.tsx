// src/pages/CoursesPage.tsx
import React from 'react';
import AvailableCourses from '../homepagecomponents/courses';  
import PopularCourses from '../homepagecomponents/popularcourses';
const CoursesPage: React.FC = () => {
  return (
    <div>
      <AvailableCourses />  
      <PopularCourses />    
    </div>
  );
};

export default CoursesPage;
