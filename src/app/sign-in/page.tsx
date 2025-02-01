"use client";

import { SignIn } from "@clerk/nextjs";
import Header from "@/components/Header";
import Navebar from "@/components/Navebar";
import Footer from "@/components/Footer";

const SignInPage = () => {
  return (
    <div>
      <Header />
      <Navebar />
      <div className="flex justify-center items-center min-h-screen">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
