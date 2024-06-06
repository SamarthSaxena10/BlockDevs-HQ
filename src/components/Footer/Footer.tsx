"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0e37] text-white py-12 px-4 font-sans tracking-wide">
      <div className="text-center">
        <h6 className="text-base">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 my-8">
          <li>
            <a
              href="https://x.com/_BlockDevs"
              className="text-xl hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-7 h-7"
                viewBox="0 0 1227 1227"
              >
                <path
                  d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z"
                  data-original="#000000"
                />
                <path
                  fill="#fff"
                  d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z"
                  data-original="#ffffff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/BlockDevs"
              className="text-xl hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.533 3.773 10.153 8.826 11.478.644.117.882-.276.882-.616 0-.305-.011-1.116-.017-2.19-3.591.779-4.349-1.731-4.349-1.731-.586-1.486-1.43-1.883-1.43-1.883-1.169-.8.089-.784.089-.784 1.293.091 1.973 1.328 1.973 1.328 1.149 1.968 3.014 1.398 3.75 1.07.117-.832.45-1.399.818-1.721-2.867-.326-5.883-1.433-5.883-6.375 0-1.408.503-2.561 1.33-3.465-.134-.325-.577-1.634.126-3.408 0 0 1.084-.348 3.55 1.32A12.355 12.355 0 0 1 12 5.544c1.094.005 2.196.148 3.23.435 2.466-1.669 3.55-1.32 3.55-1.32.705 1.774.262 3.083.128 3.408.83.904 1.33 2.057 1.33 3.465 0 4.953-3.019 6.045-5.894 6.365.461.396.872 1.174.872 2.368 0 1.71-.015 3.086-.015 3.504 0 .344.236.738.887.614C20.23 22.153 24 17.533 24 12 24 5.373 18.627 0 12 0z"
                />
              </svg>
            </a>
          </li>
        </ul>

        <p className="text-base">
          &copy; 2024
          <a target="_blank" className="hover:underline mx-2">
            BlockDevs
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
