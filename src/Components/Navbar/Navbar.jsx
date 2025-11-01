import React from 'react'

const Navbar = () => {
  return (
   
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            B-Mart
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Products</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
        </div>
      )}
    </nav>
  );
};



export default Navbar