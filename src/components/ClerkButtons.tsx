// "use client";

// import { SignInButton, useUser } from "@clerk/nextjs";

// const ClerkButtons = () => {
//   const { isSignedIn } = useUser();

//   return isSignedIn ? null : (
//     <SignInButton>
//        <button className="bg-blue-500 py-[5px] hover:bg-blue-800 px-[10px] text-white text-sm rounded-md">
//         Sign In
//       </button>
//     </SignInButton>


//   );
// };

// export default ClerkButtons;

"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const ClerkButtons = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? null : (
    <Link href="/sign-in">
      <button className="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-700">
        Sign In
      </button>
    </Link>
  );
};

export default ClerkButtons;

