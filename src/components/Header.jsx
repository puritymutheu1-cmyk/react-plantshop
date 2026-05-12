function Header() {
  return (
    <header className="bg-green-700 text-white p-5 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">
          🌿 Plant Shop
        </h1>

        {/* Optional tagline */}
        <p className="text-sm hidden md:block">
          Find your perfect plant 🌱
        </p>

      </div>
    </header>
  );
}

export default Header;