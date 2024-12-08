const ContactSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-xl text-gray-500 mt-4">
            For any inquiries, feel free to reach out to us.
          </p>
          <div className="mt-8">
            <a href="mailto:info@example.com" className="bg-yellow-500 text-white py-2 px-6 rounded-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  