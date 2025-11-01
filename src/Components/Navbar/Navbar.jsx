import React from 'react'

const Navbar = () => {
  return (
   
    <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-2xl font-bold text-blue-600">B-Mart</h1>

      <!-- Menu Items -->
      <ul class="flex space-x-6">
        <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">Products</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar