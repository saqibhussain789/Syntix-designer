import { useState } from "react";

const AvailableCourses = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section id="course" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h1 className="text-4xl font-semibold">
            <span className="text-black text-4xl">Available</span>
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">Courses</h1>
          <p className="text-gray-500 text-lg sm:text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Tab Navigation */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <ul className="nav flex sm:flex-col text-lg font-semibold space-y-2">
              {[
                { id: "1", label: "Graphic Designing" },
                { id: "2", label: "Online Marketing" },
                { id: "3", label: "Brand & Strategy" },
                { id: "4", label: "Social Marketing" },
                { id: "5", label: "Basic Photography" },
              ].map((tab) => (
                <li key={tab.id} className="nav-item">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
                      activeTab === tab.id
                        ? "bg-yellow-400 text-blue-900 border-yellow-400"
                        : "bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white"
                    } transition-all duration-300`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-full sm:w-2/3 lg:w-3/4">
            <div className="tab-content">
              {[
                {
                  id: "1",
                  title: "Graphic Designing",
                  img: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/graphic-design.jpg",
                  description:
                    "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.",
                },
                {
                  id: "2",
                  title: "Online Marketing",
                  img: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/internet-marketing.jpg",
                  description:
                    "Online marketing is the process of promoting your business on various digital platforms to reach a broader audience.",
                },
                {
                  id: "3",
                  title: "Brand & Strategy",
                  img: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/branding.jpg",
                  description:
                    "Learn how to define, build, and communicate a strong brand identity for your business or personal projects.",
                },
                {
                  id: "4",
                  title: "Social Marketing",
                  img: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/social-marketing.jpg",
                  description:
                    "Understand the core principles of leveraging social media platforms to drive traffic, engagement, and conversions.",
                },
                {
                  id: "5",
                  title: "Basic Photography",
                  img: "https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/photography.jpg",
                  description:
                    "Learn the fundamentals of photography, including composition, lighting, and post-production techniques.",
                },
              ]
                .filter((tab) => tab.id === activeTab)
                .map((tab) => (
                  <div key={tab.id} className="tab-pane active">
                    <div className="flex flex-wrap sm:space-y-4 lg:space-y-0">
                      <div className="w-full sm:w-1/2 lg:w-2/5 p-4">
                        <img
                          src={tab.img}
                          alt={tab.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 lg:w-3/5 p-4">
                        <h3 className="text-2xl font-semibold mb-4">
                          {tab.title}
                        </h3>
                        <p className="text-lg text-gray-700">{tab.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
