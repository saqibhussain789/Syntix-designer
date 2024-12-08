import React from 'react';
import { useParams } from 'react-router-dom';

// Updated course data to match your course names and other properties
const coursesData = [
  {
    id: "branding-thoughts-2",
    courseName: "WordPress Essential Training",
    description: "Learn the basics of WordPress development, from installation to customization.",
    instructor: "John Doe",
    duration: "6 Weeks",
    price: "$300",
  },
  {
    id: "lightroom-cc-essential-2",
    courseName: "Practicing Photographer",
    description: "Get hands-on with photography techniques and enhance your skills in digital photography.",
    instructor: "Jane Smith",
    duration: "8 Weeks",
    price: "$250",
  },
  {
    id: "practicing-photographer-2",
    courseName: "Lightroom CC Essential",
    description: "Master the use of Lightroom CC to enhance your photography with professional editing tools.",
    instructor: "Richard Roe",
    duration: "5 Weeks",
    price: "$350",
  },
  {
    id: "wordpress-essential-training-3",
    courseName: "Branding Thoughts",
    description: "Learn how to build a strong brand identity and develop effective branding strategies.",
    instructor: "Emily Davis",
    duration: "4 Weeks",
    price: "$400",
  },
  // Add more courses as needed
];

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Find the course based on the courseId from the URL
  const course = coursesData.find((course) => course.id === courseId);

  // If course is not found, return an error message
  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-detail-page container mx-auto px-4 py-16">
      <div className="text-left mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">{course.courseName}</h1>
        <p className="text-xl text-gray-600 mt-4">{course.description}</p>
      </div>

      <div className="course-info mt-6">
        <h3 className="text-2xl font-semibold">Instructor: {course.instructor}</h3>
        <p className="text-lg mt-2">Duration: {course.duration}</p>
        <p className="text-lg mt-2">Price: {course.price}</p>
      </div>
    </div>
  );
};

export default CourseDetailPage;
