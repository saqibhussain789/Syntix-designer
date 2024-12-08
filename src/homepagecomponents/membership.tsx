import {
  FaUnlockAlt,
  FaVideo,
  FaMicrophone,
  FaFileAlt,
  FaMobile,
  FaLifeRing,
} from "react-icons/fa";

const MembershipFeatures = () => {
  return (
    <section className="bg-white py-12" id="features">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="text-left mb-10">
          <h1 className="text-6xl font-bold text-gray-800">
            <span className="text-black text-4xl">MEMBERSHIPS</span>
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">INCLUDE</h1>
          <p className="text-gray-500 text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaUnlockAlt />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              Unlimited access
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaVideo />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              4500 video courses
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaMicrophone />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              Expert teachers
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaFileAlt />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              Valid Certification
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaMobile />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              On-the-go learning
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
            <span className="text-yellow-400 text-4xl">
              <FaLifeRing />
            </span>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              24x7 Super Support
            </h3>
            <p className="text-gray-500 mt-2">
              Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipFeatures;
