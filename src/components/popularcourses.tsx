import React from "react";

const PopularCourses = () => {
  return (
    <section className="bg-gray-100 py-16" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10">
          <h1 className="text-6xl font-bold text-gray-800">
            <span className="text-black text-4xl">POPULAR</span>
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">COURSES</h1>
          <p className="text-gray-500 text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Course 1 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course1-3.jpg"
                alt="WordPress Essential Training"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=branding-thoughts-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=branding-thoughts-2"
                className="hover:text-yellow-400"
              >
                WordPress Essential Training
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 2 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course2-3.jpg"
                alt="Practicing Photographer"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=lightroom-cc-essential-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=lightroom-cc-essential-2"
                className="hover:text-yellow-400"
              >
                Practicing Photographer
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 3 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course3-3.jpg"
                alt="Lightroom CC Essential"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=practicing-photographer-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=practicing-photographer-2"
                className="hover:text-yellow-400"
              >
                Lightroom CC Essential
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 4 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course4-3.jpg"
                alt="Branding Thoughts"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=wordpress-essential-training-3"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=wordpress-essential-training-3"
                className="hover:text-yellow-400"
              >
                Branding Thoughts
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 5 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course5-2.jpg"
                alt="HTML5 Basic Training"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=wordpress-essential-training-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=wordpress-essential-training-2"
                className="hover:text-yellow-400"
              >
                HTML5 Basic Training
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 6 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course6-2.jpg"
                alt="Marketing Tips"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=practicing-photographer"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=practicing-photographer"
                className="hover:text-yellow-400"
              >
                Marketing Tips
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 7 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course7-2.jpg"
                alt="Photoshop Training"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=lightroom-cc-essential"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=lightroom-cc-essential"
                className="hover:text-yellow-400"
              >
                Photoshop Training
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>

          {/* Course 8 */}
          <li className="group">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/course8-2.jpg"
                alt="Light & Shadow"
                className="w-full h-auto rounded-lg"
              />
              <a
                href="https://shtheme.com/demosd/elearn/?course=branding-thoughts"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              <a
                href="https://shtheme.com/demosd/elearn/?course=branding-thoughts"
                className="hover:text-yellow-400"
              >
                Light & Shadow
              </a>
            </h3>
            <p className="text-gray-600">May 16, 2023</p>
          </li>
        </ul>

        <div className="text-center mt-8">
          <a
            href="https://shtheme.com/demosd/elearn/?page_id=81"
            className="bg-blue-900 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-blue-800"
          >
            View all Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
