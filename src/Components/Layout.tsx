import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen flex  justify-center">
      <div className="container mx-auto">{/* Content container */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
