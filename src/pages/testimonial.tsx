import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    feedback: "This platform helped me develop my skills. The courses are amazing and the instructors are top-notch!",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Web Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    feedback: "I learned so much in a short time! The course content was practical and well-organized.",
    rating: 4
  },
  {
    id: 3,
    name: "Richard Roe",
    role: "Photographer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    feedback: "Highly recommend this website! The lessons are easy to follow, and the community is supportive.",
    rating: 5
  },
  // Add more testimonials as needed
];

const TestimonialPage: React.FC = () => {
  return (
    <div className="testimonial-page bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">What Our Users Say</h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-4">
            See how our platform has helped hundreds of people improve their skills and grow in their careers.
          </p>
        </div>

        {/* Testimonial List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {/* User Photo */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-lg mb-4">"{testimonial.feedback}"</p>

              {/* Rating */}
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#submit-testimonial"
            className="bg-blue-900 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-blue-800"
          >
            Share Your Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
