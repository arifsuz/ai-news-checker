import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">AI News Checker</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/documentation" className="hover:underline">Documentation</Link></li>
          <li><Link to="/chatbot" className="hover:underline">Chatbot</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;