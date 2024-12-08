import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import React Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const faqData = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a variety of online courses ranging from web development, graphic design, digital marketing, photography, branding, and much more. You can find the full list of our courses on the courses page.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      'To enroll in any of our courses, simply visit the course page, select the course you are interested in, and click on the "Enroll Now" button. You will be prompted to fill out a registration form and make a payment if required.',
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Yes! We frequently offer promotions and discounts on our courses. Make sure to subscribe to our newsletter to receive the latest updates on discounts, offers, and upcoming courses.",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "The duration of our courses varies depending on the type and complexity of the subject. Our short courses usually last between 4-6 weeks, while advanced courses may take longer. Check the course page for specific course durations.",
  },
  {
    question: "Can I get a refund if I am not satisfied with a course?",
    answer:
      "We offer a 14-day money-back guarantee if you are not satisfied with the course. You can request a refund within 14 days of purchase by contacting our support team.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team through the contact form on our contact page or email us directly at support@yourcompany.com. Our team is available 24/7 to assist you with any queries.",
  },
];

const ContactPage: React.FC = () => {
  // State to manage visibility of answers
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="contact-page bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl justify-start font-extrabold text-gray-800">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-4">
            Have any questions? We'd love to hear from you! Reach out to us
            using the form below or get in touch through our contact details.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send us a Message
            </h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-3 px-8 text-lg font-semibold rounded-lg hover:bg-blue-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Get in Touch
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Phone:</h3>
              <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Email:</h3>
              <p className="text-lg text-gray-600">contact@yourcompany.com</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Address:</h3>
              <p className="text-lg text-gray-600">
                123 Business St, Suite 456, City, State, Country
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-links flex justify-center gap-6 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-yellow-400 text-3xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-yellow-400 text-3xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-yellow-400 text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-yellow-400 text-3xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            Our Location
          </h2>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.852268467506!2d-77.0365901!3d38.8976763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b4cd8b6fa14f%3A0x4b7dfe7d2fa5972c!2sThe+White+House!5e0!3m2!1sen!2sus!4v1638587918004!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* FAQ Section */}
        <div className="faq-section bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Frequently Asked Questions</h2>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-6 p-4 rounded-lg shadow-md ${
                openIndex === index ? 'bg-gray-200' : 'bg-gray-50'
              } transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 cursor-pointer`}
            >
              <div
                className="faq-question flex justify-between items-center text-xl font-semibold text-gray-800"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-900" size={20} />
                ) : (
                  <FaChevronDown className="text-blue-900" size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="faq-answer text-lg text-gray-600 mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
