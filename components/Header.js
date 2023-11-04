import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBed,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Define your styles as objects in JavaScript
const columnBaseStyle = { fill: "#ADD8E6" };
const columnShaftStyle = { fill: "#ADD8E6", stroke: "#333", strokeWidth: 2 };
const columnCapStyle = { fill: "#ADD8E6", stroke: "#333", strokeWidth: 2 };
const textStyle = { font: "italic 16px serif", fill: "#FFD700" }; // Adjusted font size for smaller SVG
const flutingStyle = { stroke: "#333", strokeWidth: 2 };

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-2 px-4">
        {" "}
        {/* Reduced padding */}
        {/* Home Link */}
        <Link href="/" passHref>
          <span className="nav-item flex items-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon
              icon={faHome}
              className="nav-item-icon mr-1"
              size="sm"
            />
            Home {/* Reduced margin and icon size */}
          </span>
        </Link>
        {/* Rooms Link */}
        <Link href="/rooms" passHref>
          <span className="nav-item flex items-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon
              icon={faBed}
              className="nav-item-icon mr-1"
              size="sm"
            />
            Rooms {/* Reduced margin and icon size */}
          </span>
        </Link>
        {/* SVG Logo */}
        <div className="svg-logo" style={{ flexShrink: 0, opacity: 0.8 }}>
          {" "}
          {/* Added opacity */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100px" // Reduced width
            height="150px" // Reduced height
            viewBox="0 0 200 300"
            version="1.1"
          >
            {/* Use inline styles for each element */}
            <rect
              x="50"
              y="250"
              width="100"
              height="15"
              style={columnBaseStyle}
            />
            <rect
              x="75"
              y="80"
              width="50"
              height="170"
              style={columnShaftStyle}
            />
            <line x1="80" y1="80" x2="80" y2="250" style={flutingStyle} />
            <line x1="90" y1="80" x2="90" y2="250" style={flutingStyle} />
            <rect
              x="50"
              y="65"
              width="100"
              height="15"
              style={columnCapStyle}
            />
           <text x="30" y="290" class="textStyle">
              Esylium Retreat
            </text>
          </svg>
        </div>
        {/* About Us Link */}
        <Link href="/about" passHref>
          <span className="nav-item flex items-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="nav-item-icon mr-1"
              size="sm"
            />
            About Us {/* Reduced margin and icon size */}
          </span>
        </Link>
        {/* Contact Us Link */}
        <Link href="/contact" passHref>
          <span className="nav-item flex items-center text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-item-icon mr-1"
              size="sm"
            />
            Contact Us {/* Reduced margin and icon size */}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
