import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="./wallpaper.jpg" className="h-8 mr-3" alt=" " />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  TOUR WITH ME
                </span> */}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  State Tourism Websites
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    Andhra Pradesh <br /> Arunachal Pradesh <br /> Assam <br />
                    Bihar <br />
                    Chhattisgarh <br /> Goa <br /> Gujarat <br /> Haryana <br />{" "}
                    Himachal Pradesh <br /> Jharkhand <br /> Karnataka <br />{" "}
                    Kerala <br /> Madhya Pradesh <br /> Maharashtra <br />{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  UT Tourism Websites
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    Andaman and Nicobar <br />
                    Chandigarh <br />
                    Dadra and Nagar Haveli <br />
                    Daman and Diu <br />
                    Delhi <br />
                    Jammu and Kashmir <br />
                    Ladakh <br />
                    Lakshadweep <br />
                    Puducherry
                  </li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Details
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    Deputy Secretary (IT) <br /> Ministry of Tourism, <br />{" "}
                    Transport Bhawan <br />
                    Sansad Marg, <br /> New Delhi <br /> ☏ +91-011 23724154{" "}
                    <br />
                    <a href="/" className="hover:text-cyan-500">
                      ✉ info.mot@gov.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright © 2023 RT{" "}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
