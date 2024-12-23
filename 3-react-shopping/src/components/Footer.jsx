import React from "react";


const Footer = () => { 
  const date = new Date();
  return (    
    <footer className="mt-auto mx-4 bg-black text-white text-center py-2" >&copy; {date.getFullYear()} <a className="underline text-gray-400" href="https://mms-it.com">MMS IT</a> All rights reserved</footer>
  );
};

export default Footer;