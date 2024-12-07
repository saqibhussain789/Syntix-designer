import React, { useState } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "thumb1.jpg",
      name: "Jessie Pinkman, MDM Inc.",
      thoughts:
        "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.",
    },
    {
      image: "thumb2.jpg",
      name: "Rene Brown",
      thoughts:
        "Sed tincidunt tristique enim sed sollicitudin. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui.",
    },
    {
      image: "thumb3.jpg",
      name: "Johnathan, Lexodia",
      thoughts:
        "Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique.",
    },
    {
      image: "thumb4.jpg",
      name: "Jinia Doe, Marco Media",
      thoughts:
        "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum.",
    },
    {
      image: "thumb5.jpg",
      name: "Brain Rice, Mark Media",
      thoughts:
        "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollicitudin.",
    },
    {
      image: "thumb6.jpg",
      name: "Jenny Park, Oham Marketing",
      thoughts:
        "Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in.",
    },
    {
      image: "thumb7.jpg",
      name: "Johann Doe",
      thoughts:
        "Sed tincidunt tristique enim sed sollicitudin. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui.",
    },
    {
      image: "thumb8.jpg",
      name: "Danny Wahel, Crikinfo",
      thoughts:
        "Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum.",
    },
    {
      image: "thumb9.jpg",
      name: "Andi Simond",
      thoughts:
        "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollicitudin.",
    },
    {
      image: "thumb10.jpg",
      name: "Kristy Gabbor, Martix Media",
      thoughts:
        "Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Default first student's testimonial shown

  return (
    <section className="bg-white py-16" id="testimonial">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <div className="text-left mb-10">
          <h1 className="text-4xl font-semibold">
            <span className="text-black text-4xl">HAPPY</span> 
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">STUDENTS</h1>
          <p className="text-gray-500 text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
        {/* Image Slider Section */}
        <div className="flex justify-center space-x-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 rounded-full overflow-hidden shadow-lg transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)} // Update activeIndex on hover
            >
              <img
                className={`w-full h-full object-cover transition-all duration-300 ${
                  activeIndex === index ? "opacity-40" : "group-hover:opacity-100"
                } ${activeIndex === index ? "transform scale-110" : ""}`}
                src={`https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/${testimonial.image}`}
                alt={`Student ${index + 1}`}
              />
              {/* Hover effect color change */}
              <div
                className={`absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Testimonial Text Section */}
        <div className="flex justify-center">
          <div className="max-w-3xl w-full text-left">
            {/* Show the current active student's testimonial */}
            <div className="transition-all duration-300">
              <p className="font-semibold text-gray-600">{testimonials[activeIndex].thoughts}</p>
              <h3 className="text-xl font-bold text-gray-800 uppercase mt-4">
                {testimonials[activeIndex].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
