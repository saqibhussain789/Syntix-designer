import { useState } from 'react';

const AvailableCourses = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <section id="course" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-left mb-10">
          <h1 className="text-4xl font-semibold">
            <span className="text-black text-4xl">Available</span> 
          </h1>
          <h1 className="text-6xl font-extrabold text-gray-800">Courses</h1>
          <p className="text-gray-500 text-2xl mt-4">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Tab Navigation */}
          <div className="px-4 py-8 w-full sm:w-1/3 md:w-1/4 p-4">
  <ul className="nav flex-col md:flex-row text-lg font-semibold">
    <li className="nav-item">
      <button
        onClick={() => setActiveTab('1')}
        className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
          activeTab === '1'
            ? 'bg-yellow-400 text-blue-900 border-yellow-400'
            : 'bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white'
        } transition-all duration-300`}
      >
        Graphic Designing
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => setActiveTab('2')}
        className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
          activeTab === '2'
            ? 'bg-yellow-400 text-blue-900 border-yellow-400'
            : 'bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white'
        } transition-all duration-300`}
      >
        Online Marketing
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => setActiveTab('3')}
        className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
          activeTab === '3'
            ? 'bg-yellow-400 text-blue-900 border-yellow-400'
            : 'bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white'
        } transition-all duration-300`}
      >
        Brand & Strategy
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => setActiveTab('4')}
        className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
          activeTab === '4'
            ? 'bg-yellow-400 text-blue-900 border-yellow-400'
            : 'bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white'
        } transition-all duration-300`}
      >
        Social Marketing
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => setActiveTab('5')}
        className={`nav-link w-full px-6 py-3 rounded-t-lg border-b-4 ${
          activeTab === '5'
            ? 'bg-yellow-400 text-blue-900 border-yellow-400'
            : 'bg-blue-900 text-yellow-400 border-transparent hover:border-yellow-400 hover:text-white'
        } transition-all duration-300`}
      >
        Basic Photography
      </button>
    </li>
  </ul>
</div>


          {/* Tab Content */}
          <div className="w-full sm:w-2/3 md:w-3/4 p-4">
            <div className="tab-content">
              {/* Tab 1: Graphic Designing */}
              {activeTab === '1' && (
                <div className="tab-pane active">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-2/5 p-4">
                      <img
                        src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/graphic-design.jpg"
                        alt="Graphic Designing"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-3/5 p-4">
                      <h3 className="text-2xl font-semibold mb-4">Graphic Designing</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
                      </p>
                      <p className="text-lg text-gray-700">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Online Marketing */}
              {activeTab === '2' && (
                <div className="tab-pane">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-2/5 p-4">
                      <img
                        src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/internet-marketing.jpg"
                        alt="Online Marketing"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-3/5 p-4">
                      <h3 className="text-2xl font-semibold mb-4">Online Marketing</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
                      </p>
                      <p className="text-lg text-gray-700">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Brand & Strategy */}
              {activeTab === '3' && (
                <div className="tab-pane">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-2/5 p-4">
                      <img
                        src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/branding.jpg"
                        alt="Brand & Strategy"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-3/5 p-4">
                      <h3 className="text-2xl font-semibold mb-4">Brand & Strategy</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
                      </p>
                      <p className="text-lg text-gray-700">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Social Marketing */}
              {activeTab === '4' && (
                <div className="tab-pane">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-2/5 p-4">
                      <img
                        src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/social-marketing.jpg"
                        alt="Social Marketing"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-3/5 p-4">
                      <h3 className="text-2xl font-semibold mb-4">Social Marketing</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
                      </p>
                      <p className="text-lg text-gray-700">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: Basic Photography */}
              {activeTab === '5' && (
                <div className="tab-pane">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 md:w-2/5 p-4">
                      <img
                        src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/photography.jpg"
                        alt="Basic Photography"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-3/5 p-4">
                      <h3 className="text-2xl font-semibold mb-4">Basic Photography</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
                      </p>
                      <p className="text-lg text-gray-700">
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
