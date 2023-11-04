import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-blue-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
        
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com">
              <span className="cursor-pointer hover:text-blue-800">
                <FaFacebook size={10} />
              </span>
            </Link>
            <Link href="https://twitter.com">
              <span className="cursor-pointer hover:text-blue-800">
                <FaTwitter size={10} />
              </span>
            </Link>
            <Link href="https://instagram.com">
              <span className="cursor-pointer hover:text-blue-800">
                <FaInstagram size={10} />
              </span>
            </Link>
            <Link href="https://linkedin.com">
              <span className="cursor-pointer hover:text-blue-800">
                <FaLinkedin size={10} />
                <p className="text-sm text-blue-800">
              © 2023 My Hotel. All rights reserved.
            </p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
