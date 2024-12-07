import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Video Preview Section */}
          <div className="w-full sm:w-1/2 p-4">
            <div className="relative">
              <img
                decoding="async"
                src="https://shtheme.com/demosd/elearn/wp-content/uploads/2023/05/video.gif"
                alt="Video Preview"
                className="w-full h-auto rounded-lg"
              />
              <a
                title="Animated history of Poland"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl"
                href="https://www.youtube.com/watch?v=1SZle1skb84"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full sm:w-1/2 px-10 p-4 flex flex-col ">
            <h1 className="text-6xl font-semibold text-black mb-4">
              Watch. Listen. Practice. Learn.
            </h1>
            <p className="text-xl text-gray-500 mb-4">
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed
              mattis. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing ante varius at. Sed mollis vestibulum sapien sed mattis.
            </p>
            <p className="text-xl text-gray-500 mb-4">
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing atgfnte tibulum sapien sed mattis. Cras dictum tellus dui.
              Sed mollis vestibulum sapien rthsed mattis. Cras dictum tellus duvi,
              vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed
              mattis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
