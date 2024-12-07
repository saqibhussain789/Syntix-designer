import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of background images
  const bgImages = [
    'url("./src/assets/image01.jpg")',
    'url("./src/assets/image02.jpg")',
  ];

  // Change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div
  className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
  style={{ backgroundImage: bgImages[currentImage] }}
>
  <div className="absolute inset-0 bg-blue-900 bg-opacity-50 z-0"></div>

  {/* Add top padding to compensate for header height */}
  <div className="pt-16">
    {/* Hero Content */}
    <div className="relative flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-16 z-10">
      {/* Left Content */}
      <div className="text-white md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Take great online courses from anywhere in the world
        </h1>
        <p className="text-lg md:text-xl">
          Explore a variety of courses designed to help you learn and grow from the comfort of your home.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold">
          VIEW COURSES
        </button>
      </div>

      {/* Right Card */}
      <div className="mt-8 md:mt-0 md:w-1/3 bg-yellow-400 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">BECOME A MEMBER</h2>
        <p className="text-sm mb-6">Get instant access to 4500 video courses</p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full md:w-1/2 p-2 rounded border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full md:w-1/2 p-2 rounded border focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 rounded border focus:outline-none"
          />
          <select className="w-full p-2 rounded border focus:outline-none">
            <option>Select Learning Program</option>
            <option>Program A</option>
            <option>Program B</option>
          </select>
          <textarea
            placeholder="Detail information"
            className="w-full p-2 rounded border focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-yellow-400 hover:bg-gray-800 py-2 rounded-lg font-bold"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default HeroSection;
