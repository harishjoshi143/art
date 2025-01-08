import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="maz-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            ratione deserunt maiores consectetur! Praesentium necessitatibus
            sapiente libero adipisci pariatur provident autem hic magni.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="flex flex-col space-y-4">
              <a
                className="hover:text-white transition-colors duration-300"
                href="#"
              >
                Home
              </a>
              <a
                className="hover:text-white transition-colors duration-300"
                href="#"
              >
                About
              </a>
              <a
                className="hover:text-white transition-colors duration-300"
                href="#"
              >
                Contact Us
              </a>
              <a
                className="hover:text-white transition-colors duration-300"
                href="#"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-4">
            <a
              className="hover:text-white transition-colors duration-300"
              href="#"
            >
              Facebook
            </a>
            <a
              className="hover:text-white transition-colors duration-300"
              href="#"
            >
              Instagram
            </a>
            <a
              className="hover:text-white transition-colors duration-300"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi,India</p>
          <p>Delhi 10001</p>
          <p>Email:info@musicSchool.com</p>
          <p>Phone:(123)-456-789</p>
        </div>
      </div>
      <p className="text-center text-xs pt-2">
        @ 2024 Music School.All right reserved
      </p>
    </div>
  );
}

export default Footer;
