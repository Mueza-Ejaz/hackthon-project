import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap justify-between items-center px-4 py-2 bg-[#F5F5F5]">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/logo1.png"
          alt="logo"
          width={100}
          height={100}
          className="w-6 h-6"
        />
      </div>

      {/* Navigation Section */}
      <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base mr-5 ">
        <span className="hidden sm:inline">Find a Store</span>
        <span className="hidden sm:inline">|</span>
        <Link href="/getHelp" className="text-black hover:underline">
          Help
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/joinUs" className="text-black hover:underline">
          Join us
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/signIn" className="text-black hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;