"use client";

import { SignInButton } from "@clerk/nextjs";
import Header from "@/components/Header";
import Navebar from "@/components/Navebar";
import Footer from "@/components/Footer";

const SignInPage = () => {
  return (
    <div>
      <Header />
      <Navebar />
      <SignInButton>
//        <button className="bg-blue-500 py-[5px] hover:bg-blue-800 px-[10px] text-white text-sm rounded-md">
//         Sign In
//       </button>
//     </SignInButton>
      <Footer />
    </div>
  );
};

export default SignInPage;
