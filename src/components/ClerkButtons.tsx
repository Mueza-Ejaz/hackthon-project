"use client";

import { SignInButton, useUser } from "@clerk/nextjs";

const ClerkButtons = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? null : (
    <SignInButton>
       <button className="bg-blue-500 py-[5px] hover:bg-blue-800 px-[10px] text-white text-sm rounded-md">
        Sign In
      </button>
    </SignInButton>
  );
};

export default ClerkButtons;
