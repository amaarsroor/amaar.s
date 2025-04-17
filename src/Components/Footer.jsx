import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-transparent relative bottom-0 flex justify-center gap-2 p-2">
      <p className=" text-gray-500">
        Amaar Sroor&copy;{new Date().getFullYear()}. All rights reserved.
      </p>
      <a className="text-xl text-gray-500" href="https://github.com/amaarsroor" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default Footer;
