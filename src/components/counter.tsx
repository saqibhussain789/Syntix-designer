import { useEffect, useState, useMemo } from "react";
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
    from: number,
    to: number,
    id: keyof CounterState,
    speed: number
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
  }, []);

  // UseMemo to format large numbers with commas (e.g., 24,500 instead of 24500)
  const formattedCounter = useMemo(() => {
    return {
      happyStudents: counter.happyStudents.toLocaleString(),
      totalCourses: counter.totalCourses.toLocaleString(),
      videoCourses: counter.videoCourses.toLocaleString(),
      totalTeachers: counter.totalTeachers.toLocaleString(),
      certifications: counter.certifications.toLocaleString(),
    };
  }, [counter]);

  return (
    <section className="bg-yellow-200 py-16 numbers_section factabout">
      <div className="container mx-auto px-4">
        <ul className="numbers countarea grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <li className="flex flex-col items-center text-center space-y-2">
            <FaSmile className="text-4xl text-yellow-600" />
            <h3 className="timer text-4xl font-bold text-yellow-800">
              {formattedCounter.happyStudents}
            </h3>
            <span className="text-lg text-gray-600">Happy Students</span>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <FaBook className="text-4xl text-yellow-600" />
            <h3 className="timer text-4xl font-bold text-yellow-800">
              {formattedCounter.totalCourses}
            </h3>
            <span className="text-lg text-gray-600">Total Courses</span>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <FaVideo className="text-4xl text-yellow-600" />
            <h3 className="timer text-4xl font-bold text-yellow-800">
              {formattedCounter.videoCourses}
            </h3>
            <span className="text-lg text-gray-600">Video Courses</span>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <FaChalkboardTeacher className="text-4xl text-yellow-600" />
            <h3 className="timer text-4xl font-bold text-yellow-800">
              {formattedCounter.totalTeachers}
            </h3>
            <span className="text-lg text-gray-600">Total Teachers</span>
          </li>
          <li className="flex flex-col items-center text-center space-y-2">
            <FaCertificate className="text-4xl text-yellow-600" />
            <h3 className="timer text-4xl font-bold text-yellow-800">
              {formattedCounter.certifications}
            </h3>
            <span className="text-lg text-gray-600">Certifications</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CounterSection;
