const SignUp = () => {
  return (
    <section className="bg-yellow-400 py-16" id="blog">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Section: Heading */}
          <div className="w-full sm:w-1/2 lg:w-1/2 mb-8 sm:mb-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              SignUp To Get The Latest News & Updates
            </h3>
          </div>

          {/* Right Section: Newsletter Form */}
          <div className="w-full sm:w-1/2 lg:w-1/2">
            <div id="mesaj"></div>

            <div className="wpcf7 no-js" id="wpcf7-f220-p7-o2" lang="en-US" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form
                action="/demosd/elearn/#wpcf7-f220-p7-o2"
                method="post"
                className="wpcf7-form init"
                aria-label="Contact form"
                noValidate
                data-status="init"
              >
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_wpcf7" value="220" />
                  <input type="hidden" name="_wpcf7_version" value="5.7.6" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f220-p7-o2" />
                  <input type="hidden" name="_wpcf7_container_post" value="7" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                </div>

                {/* Fixed: Removed 'name' from <div> */}
                <div id="subscribeform">
                  <div className="flex flex-wrap">
                    {/* Email Input */}
                    <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/4 mb-4 sm:mb-0">
                      <input
                        id="subemail"
                        type="email"
                        name="email-79"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        aria-required="true"
                        aria-invalid="false"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 flex justify-center">
                      <button
                        id="subsubmit"
                        type="submit"
                        className="w-full sm:w-auto bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                
                  <input
                    type="hidden"
                    id="ak_js_2"
                    name="_wpcf7_ak_js"
                    value={Date.now().toString()} // Convert number to string
                  />
                  <script>
                    {`
                      document.getElementById("ak_js_2").setAttribute(
                        "value",
                        new Date().getTime().toString()
                      );
                    `}
                  </script>
               
                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
