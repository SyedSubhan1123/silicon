const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center py-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="h-14 sm:h-16 md:h-20 lg:h-20 w-auto object-contain"
          />
        </div>

        {/* CTA Button */}
        <button className="mt-3 sm:mt-0 bg-emerald-500 rounded-2xl py-2 px-5 sm:py-3 sm:px-7 font-bold text-white text-sm sm:text-base lg:text-lg hover:bg-emerald-600 transition">
          Get Started
        </button>

      </div>
    </header>
  );
};

export default Header;
