import React from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const TeachersSection = () => {
  const teachers = [
    {
      name: "ANA DOE",
      image: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/teacher1.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        google: "https://google.com/",
        youtube: "https://youtube.com/"
      },
      description: "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
    },
    {
      name: "Johnathan DOE",
      image: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/teacher2.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        google: "https://google.com/",
        youtube: "https://youtube.com/"
      },
      description: "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
    },
    {
      name: "Lisa Brown",
      image: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/teacher3.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        google: "https://google.com/",
        youtube: "https://youtube.com/"
      },
      description: "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
    },
    {
      name: "Peter Mitchlle",
      image: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/teacher4.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        google: "https://google.com/",
        youtube: "https://youtube.com/"
      },
      description: "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
    }
  ];

  return (
    <section className="bg-gray-100 py-16" id="teachers">
      <div className="container mx-auto text-center">
        <div className="text-left mb-10">
          <h1 className="text-6xl font-bold text-gray-800">
            <span className="text-black text-4xl">AWESOME</span>
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">TEACHERS</h1>
          <p className="text-gray-500 text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="relative">
                <img
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:opacity-70 transition-opacity duration-300"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-500 bg-opacity-50">
                  <ul className="flex space-x-6">
                    <li>
                      <a href={teacher.socialLinks.facebook} className="text-white hover:text-yellow-500">
                        <FaFacebook size={24} />
                      </a>
                    </li>
                    <li>
                      <a href={teacher.socialLinks.twitter} className="text-white hover:text-yellow-500">
                        <FaTwitter size={24} />
                      </a>
                    </li>
                    <li>
                      <a href={teacher.socialLinks.google} className="text-white hover:text-yellow-500">
                        <FaGoogle size={24} />
                      </a>
                    </li>
                    <li>
                      <a href={teacher.socialLinks.youtube} className="text-white hover:text-yellow-500">
                        <FaYoutube size={24} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 uppercase">{teacher.name}</h3>
                <p className="mt-2 text-gray-600">{teacher.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeachersSection;
