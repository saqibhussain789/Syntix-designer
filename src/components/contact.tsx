const ContactSection = () => {
  return (
    <>
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-left mb-10">
            <h1 className="text-6xl font-bold text-gray-800">
              <span className="text-black text-4xl">HAVE</span>
            </h1>
            <h1 className="text-6xl font-extrabold text-gray-800">QUESTIONS</h1>
            <p className="text-gray-500 text-2xl mt-4">
              Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
              <br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
              tincidunt tristique enim sed sollicitudin.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="h-full relative mb-8 md:mb-0 py-8">
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=Central Park, New York, NY, USA&t=m&z=10&output=embed&iwloc=near"
                  title="Central Park, New York, NY, USA"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 pl-0 md:pl-12">
              <div id="message"></div>
              <div className="wpcf7 no-js" id="wpcf7-f224-p7-o3" lang="en-US" dir="ltr">
                <form
                  action="/demosd/elearn/#wpcf7-f224-p7-o3"
                  method="post"
                  className="wpcf7-form init space-y-4"
                  aria-label="Contact form"
                  
                  data-status="init"
                >
                  <div style={{ display: 'none' }}>
                    <input type="hidden" name="_wpcf7" value="224" />
                    <input type="hidden" name="_wpcf7_version" value="5.7.6" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f224-p7-o3" />
                    <input type="hidden" name="_wpcf7_container_post" value="7" />
                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  </div>

                  <div id="cform">
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="text-503"
                          id="name"
                          className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Full Name"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email-848"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Email"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div>
                        <textarea
                          name="textarea-276"
                          id="comments"
                          className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={6}
                          placeholder="Your Message"
                          aria-required="true"
                          aria-invalid="false"
                        ></textarea>
                      </div>
                      <div>
                        <input
                          type="submit"
                          value="Send Message"
                          className="w-full py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'none !important' }}>
                    <label>
                      &#916;
                      <textarea
                        name="_wpcf7_ak_hp_textarea"
                        cols={45}
                        rows={8}
                        maxLength={100}
                        className="hidden"
                      ></textarea>
                    </label>
                    <input type="hidden" id="ak_js_3" name="_wpcf7_ak_js" value="192" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
