"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const ClerkButtons = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? <UserButton /> : <SignInButton />;
};

export default ClerkButtons;
