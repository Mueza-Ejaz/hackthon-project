

import { useUser , SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

const ClerkButtons = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? null : (
    

    
        <SignInButton>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 py-[2px] px-3 text-[12px] text-white rounded-md hover:bg-blue-700"
          >
            Sign In
          </motion.button>
        </SignInButton>

  
  );
};

export default ClerkButtons;





