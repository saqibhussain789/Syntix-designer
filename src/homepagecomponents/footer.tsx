import { FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaYoutube, FaPaypal, FaAmazon, FaCcVisa, FaCcMastercard, FaCcDiscover } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ABOUT US</h3>
            <p className="text-sm mb-4">
              Phasellus mattis felis quis enim viverra. Nullam porta risus felis, vitaeuk dapibus arcu viverra eu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <FaTwitter className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaFacebookF className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaGooglePlusG className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaVimeoV className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaYoutube className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>

          {/* Recent News Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">RECENT NEWS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400">The 8 Most Important Benefits</a>
                <p className="text-xs text-gray-300">by Admin on May 15, 2023</p>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">What is eLearning?</a>
                <p className="text-xs text-gray-300">by Admin on May 15, 2023</p>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">What is the purpose of eLearning</a>
                <p className="text-xs text-gray-300">by Admin on May 15, 2023</p>
              </li>
            </ul>
          </div>

          {/* How It Works Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">HOW IT WORKS?</h3>
            <p className="text-sm mb-4">
              Phasellus mattis felis quis enim viverra. Nullam porta risus felis, vitaeuk dapibus arcu viverra eu.
            </p>
            <ul className="space-y-2 text-sm">
              <li>Phasellus mattis felis quis enim</li>
              <li>Nullam porta risus vitaeuk dapibus</li>
              <li>Vivamus sit amet ligulaque semper</li>
            </ul>
          </div>

          {/* We Accept Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">WE ACCEPT</h3>
            <p className="text-sm mb-4">
              Phasellus mattis felis quis enim viverra. Nullam porta risus felis, vitaeuk dapibus arcu viverra eu.
            </p>
            <div className="flex space-x-4 flex-wrap">
              <FaPaypal className="text-4xl text-yellow-400" />
              <FaAmazon className="text-4xl text-yellow-400" />
              <FaCcVisa className="text-4xl text-yellow-400" />
              <FaCcMastercard className="text-4xl text-yellow-400" />
              <FaCcDiscover className="text-4xl text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            © 2024 SyntixDesigner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
