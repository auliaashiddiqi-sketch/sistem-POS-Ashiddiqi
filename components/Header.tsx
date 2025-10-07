
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-6 z-10">
      <h1 className="text-xl font-bold text-gray-800 tracking-wider">
        POS <span className="text-indigo-600">Ashiddiqi</span>
      </h1>
    </header>
  );
};

export default Header;
