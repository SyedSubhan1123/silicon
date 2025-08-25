const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center py-4 gap-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Contact + CTA */}
        <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-3 w-full sm:w-auto text-center sm:text-left">

          {/* Email */}
          <div>
            <a href="mailto:maazshujaat123@gmail.com" className="flex justify-center sm:justify-start items-center gap-2 text-base sm:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl mt-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              maazshujaat123@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <a href="tel:+1 208 291 4545" className="flex justify-center sm:justify-start items-center gap-2 text-base sm:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 
                1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 
                0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 
                .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 
                0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 
                1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              208 291 4545
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-emerald-500 cursor-pointer rounded-2xl py-2 px-5 sm:py-2.5 sm:px-6 font-bold text-white text-sm sm:text-base lg:text-lg hover:bg-emerald-600 transition">
              Live Chat
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
