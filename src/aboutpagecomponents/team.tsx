import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://example.com/john.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://example.com/jane.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.socialLinks.facebook} className="text-blue-600">
                  <FaFacebook size={24} />
                </a>
                <a href={member.socialLinks.twitter} className="text-blue-400">
                  <FaTwitter size={24} />
                </a>
                <a href={member.socialLinks.linkedin} className="text-blue-800">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
