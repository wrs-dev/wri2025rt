import React from 'react';
import Link from 'next/link';
import Animation from '@/components/animations/anim2025RT';

const Header = () => {
  return (
    <header className="pb-8 bg-white shadow sm:pb-8 sm:pt-8">
      <div className="container px-4 mx-auto">

        {/* 1) Desktop/Tablet layout (≥ sm): single row, hidden on mobile */}
        <div className="items-end justify-between hidden sm:flex">
          
          {/* Left sponsor: NURail */}
          <div className="flex items-end">
            <a
              href="https://nurailcoe.railtec.illinois.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/NuRail_Presenting_Sponsor_2025.png"
                alt="NURail Logo"
                style={{ display: 'block' }}
                className="
                  h-auto
                  sm:w-[160px]
                  md:w-[175px]
                  lg:w-[258px]
                "
              />
            </a>
          </div>

          {/* Center animation */}
          <div className="flex items-end justify-center flex-grow">
            <Animation />
          </div>

          {/* Right sponsor: MassTransit */}
          <div className="flex items-end">
            <a
              href="https://www.masstransitmag.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/mass-transit-presenting-sponsor.webp"
                alt="Mass Transit Logo"
                style={{ display: 'block' }}
                className="
                  h-auto
                  sm:w-[140px]
                  md:w-[150px]
                  lg:w-[217px]
                "
              />
            </a>
          </div>
        </div>

        {/* 2) Mobile layout (< sm): single column, logos side-by-side */}
        <div className="flex flex-col items-center w-full sm:hidden">
          {/* Animation on its own line */}
          <div className="flex justify-center w-full mt-4">
            <Animation />
          </div>

          {/* Two logos side by side, bottom-aligned */}
          <div className="flex items-end justify-around w-full mt-4">
            <a
              href="https://nurailcoe.railtec.illinois.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/NuRail_Presenting_Sponsor_2025.png"
                alt="NURail Logo"
                style={{ display: 'block' }}
                className="w-[140px] h-auto"
              />
            </a>
            <a
              href="https://www.masstransitmag.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative top-[-1px]"
            >
              <img
                src="/mass-transit-presenting-sponsor.webp"
                alt="Mass Transit Logo"
                style={{ display: 'block' }}
                className="w-[115px] h-auto"
              />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;