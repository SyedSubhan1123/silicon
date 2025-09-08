const Header = () => {
  return (
    <header className="bg-[#E9F4EE] text-black h-[104px] md:h-[120px] sm:h-[120px] lg:h-[104px] px-6 sm:px-6 lg:px-6">
      <div className="silicon-container">
        <div className="py-3 flex justify-between items-center">
          {/* Logo optimized */}
          <div className="flex-1 flex justify-center items-start sm:justify-start md:justify-center lg:items-start lg:justify-start">
            <a href="/" className="cursor-pointer">
              <picture>
                {/* Serve modern formats first */}

                <source
                  srcSet="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409115/logo_jcp3e7.webp"
                  type="image/webp"
                />
                <img
                  src="https://res.cloudinary.com/dn3xpdakt/image/upload/v1756409115/logo_jcp3e7.webp"
                  alt="B4Blurb Publishers Logo"
                  loading="eager" // logos should load immediately
                  width="189"
                  height="80"
                  className="h-20 md:h-24 lg:h-20 w-auto object-contain"
                />
              </picture>
            </a>
          </div>

          {/* Contact buttons */}
          <div className="hidden sm:flex md:hidden lg:flex flex-row justify-center items-center gap-8">
            <div className="flex items-center justify-center gap-2 mt-1 ml-4">
              <a
                href="mailto:info@bookcraftpublishers.com"
                className="flex items-center text-gray-800 transition no-underline font-bold"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-2xl mr-2 text-emerald-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                <span className="montserrat">info@b4blurb.com</span>
              </a>
            </div>
            <a
              href="tel:+13239891095"
              className="flex items-center mt-1 no-underline bg-emerald-400 text-black px-4 py-2 rounded-xl text-base cursor-pointer hover:bg-[#ffffff] transition font-bold"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-2xl mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              <span className="montserrat">(323) 989 1095</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
