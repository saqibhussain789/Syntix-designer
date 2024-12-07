const PricingSection = () => {
  return (
    <section
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url(https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/blue-pattern.jpg)",
      }}
      id="pricing"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="text-left mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl">EASY</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            PRICING
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="plan-name">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Starter</h2>
              <h4 className="text-xl text-gray-500">Monthly Plan</h4>
            </div>
            <div className="plan-price mt-4">
              <h4 className="text-4xl font-bold text-gray-800">$10</h4>
            </div>
            <div className="plan-features mt-4">
              <ul className="list-disc pl-5 text-left text-gray-600">
                <li>Unlimited Course Access</li>
                <li>20 Video Course Access</li>
                <li>Online Examination</li>
                <li>No Certifications</li>
                <li>Free Teacher Consulting</li>
                <li>Automatic Cloud Backups</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>

          {/* Unlimited Plan (Best Plan) */}
          <div className="bg-yellow-500 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="plan-name">
              <h2 className="text-2xl sm:text-3xl font-semibold">Unlimited</h2>
              <h4 className="text-xl">Monthly Plan</h4>
            </div>
            <div className="plan-price mt-4">
              <h4 className="text-4xl font-bold">$199</h4>
            </div>
            <div className="plan-features mt-4">
              <ul className="list-disc pl-5 text-left">
                <li>Unlimited Course Access</li>
                <li>20 Video Course Access</li>
                <li>Online Examination</li>
                <li>No Certifications</li>
                <li>Free Teacher Consulting</li>
                <li>Automatic Cloud Backups</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="plan-name">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Premium</h2>
              <h4 className="text-xl text-gray-500">Monthly Plan</h4>
            </div>
            <div className="plan-price mt-4">
              <h4 className="text-4xl font-bold text-gray-800">$299</h4>
            </div>
            <div className="plan-features mt-4">
              <ul className="list-disc pl-5 text-left text-gray-600">
                <li>Unlimited Course Access</li>
                <li>20 Video Course Access</li>
                <li>Online Examination</li>
                <li>No Certifications</li>
                <li>Free Teacher Consulting</li>
                <li>Automatic Cloud Backups</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
