import { FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-6">
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
            <div className="flex space-x-4 flex-wrap justify-start">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/PayPal_logo.svg/800px-PayPal_logo.svg.png" alt="PayPal" className="w-12 h-6 mb-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Amazon_icon.png/800px-Amazon_icon.png" alt="Amazon" className="w-12 h-6 mb-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png" alt="Visa" className="w-12 h-6 mb-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/MasterCard_2019_logo.svg/800px-MasterCard_2019_logo.svg.png" alt="MasterCard" className="w-12 h-6 mb-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Discover_Card_logo_2016.svg/800px-Discover_Card_logo_2016.svg.png" alt="Discover" className="w-12 h-6 mb-2" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            © 2024 Elearn Theme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
