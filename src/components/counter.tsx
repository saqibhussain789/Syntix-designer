import { useEffect, useState } from "react";
import { FaSmile, FaBook, FaVideo, FaChalkboardTeacher, FaCertificate } from "react-icons/fa"; // Importing relevant icons

// Define the type for the counter state
interface CounterState {
  happyStudents: number;
  totalCourses: number;
  videoCourses: number;
  totalTeachers: number;
  certifications: number;
}

const CounterSection = () => {
  // State to manage the number counting
  const [counter, setCounter] = useState<CounterState>({
    happyStudents: 0,
    totalCourses: 0,
    videoCourses: 0,
    totalTeachers: 0,
    certifications: 0,
  });

  // Function to animate the numbers
  const animateCounter = (
    from: number,   // 'from' should be a number
    to: number,     // 'to' should be a number
    id: keyof CounterState, // 'id' will be a key from the 'counter' state object, e.g., 'happyStudents'
    speed: number   // 'speed' should be a number indicating the interval speed
  ) => {
    let currentValue = from;
    const interval = setInterval(() => {
      if (currentValue < to) {
        currentValue += 1;
        setCounter((prevState) => ({
          ...prevState,
          [id]: currentValue,
        }));
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  useEffect(() => {
    // Call the animateCounter function with appropriate values
    animateCounter(100, 24500, "happyStudents", 1);
    animateCounter(100, 4500, "totalCourses", 1);
    animateCounter(100, 2200, "videoCourses", 1);
    animateCounter(100, 1450, "totalTeachers", 1);
    animateCounter(100, 550, "certifications", 1);
  }, []); // Empty dependency array means it will run only once after the component mounts

  return (
    <section className="bg-yellow-200 py-16 numbers_section factabout">
      <div className="container mx-auto px-4">
        <ul className="numbers countarea grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <li className="flex items-center justify-center text-center space-x-4">
            <FaSmile className="text-4xl text-yellow-600" />
            <div>
              <h3 className="timer text-4xl font-bold text-yellow-800">
                {counter.happyStudents}
              </h3>
              <span className="text-lg text-gray-600">Happy Students</span>
            </div>
          </li>
          <li className="flex items-center justify-center text-center space-x-4">
            <FaBook className="text-4xl text-yellow-600" />
            <div>
              <h3 className="timer text-4xl font-bold text-yellow-800">
                {counter.totalCourses}
              </h3>
              <span className="text-lg text-gray-600">Total Courses</span>
            </div>
          </li>
          <li className="flex items-center justify-center text-center space-x-4">
            <FaVideo className="text-4xl text-yellow-600" />
            <div>
              <h3 className="timer text-4xl font-bold text-yellow-800">
                {counter.videoCourses}
              </h3>
              <span className="text-lg text-gray-600">Video Courses</span>
            </div>
          </li>
          <li className="flex items-center justify-center text-center space-x-4">
            <FaChalkboardTeacher className="text-4xl text-yellow-600" />
            <div>
              <h3 className="timer text-4xl font-bold text-yellow-800">
                {counter.totalTeachers}
              </h3>
              <span className="text-lg text-gray-600">Total Teachers</span>
            </div>
          </li>
          <li className="flex items-center justify-center text-center space-x-4">
            <FaCertificate className="text-4xl text-yellow-600" />
            <div>
              <h3 className="timer text-4xl font-bold text-yellow-800">
                {counter.certifications}
              </h3>
              <span className="text-lg text-gray-600">Certifications</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CounterSection;
