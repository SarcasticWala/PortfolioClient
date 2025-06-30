
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-600 border-t-amber-500 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <div className="text-amber-500 font-light tracking-wider">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
