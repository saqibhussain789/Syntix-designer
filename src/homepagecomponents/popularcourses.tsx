import { Link } from "react-router-dom"; // Import Link for navigation

const PopularCourses = () => {
  return (
    <section className="bg-gray-100 py-16" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
            <span className="text-black text-2xl sm:text-3xl">POPULAR</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800">
            COURSES
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-4">
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
              <Link
                to="/course/branding-thoughts-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-semibold text-blue-900">
                <Link
                  to="/course/branding-thoughts-2"
                  className="hover:text-yellow-400"
                >
                  WordPress Essential Training
                </Link>
              </h3>
              <p className="text-gray-600">May 16, 2023</p>
            </div>
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
              <Link
                to="/course/lightroom-cc-essential-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-semibold text-blue-900">
                <Link
                  to="/course/lightroom-cc-essential-2"
                  className="hover:text-yellow-400"
                >
                  Practicing Photographer
                </Link>
              </h3>
              <p className="text-gray-600">May 16, 2023</p>
            </div>
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
              <Link
                to="/course/practicing-photographer-2"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-semibold text-blue-900">
                <Link
                  to="/course/practicing-photographer-2"
                  className="hover:text-yellow-400"
                >
                  Lightroom CC Essential
                </Link>
              </h3>
              <p className="text-gray-600">May 16, 2023</p>
            </div>
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
              <Link
                to="/course/wordpress-essential-training-3"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl group-hover:block opacity-0 group-hover:opacity-100"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-semibold text-blue-900">
                <Link
                  to="/course/wordpress-essential-training-3"
                  className="hover:text-yellow-400"
                >
                  Branding Thoughts
                </Link>
              </h3>
              <p className="text-gray-600">May 16, 2023</p>
            </div>
          </li>

          {/* Additional Courses (Course 5 to Course 8) */}
          {/* Repeat the above structure for the remaining courses */}
        </ul>

        <div className="text-center mt-8">
          <Link
            to="/courses"
            className="bg-blue-900 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-blue-800"
          >
            View all Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
