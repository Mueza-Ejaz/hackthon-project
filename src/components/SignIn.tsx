import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[380px] space-y-4">
        {/* Nike Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo2.png"
            alt="Nike"
            width={324}
            height={100}
            className="h-16 w-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight">YOUR ACCOUNT</h1>
          <h1 className="text-xl font-bold tracking-tight">FOR EVERYTHING</h1>
          <h1 className="text-xl font-bold tracking-tight">NIKE</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-4 border rounded-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-4 border rounded-none"
          />

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {/* Checkbox */}
              <input
                id="keep-signed"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label htmlFor="keep-signed" className="text-gray-700">
                Keep me signed in
              </label>
            </div>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Forgotten your password?
            </Link>
          </div>

          <div className="text-xs text-center text-gray-500">
            By logging in, you agree to Nikes{" "}
            <Link href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-gray-700">
              Terms of Use
            </Link>
            .
          </div>

          <button className="w-full bg-black text-white hover:bg-gray-900 rounded-md py-2">
            SIGN IN
          </button>
        </form>

        <div className="text-sm text-center">
          Not a Member?{" "}
          <Link href="#" className="text-black hover:underline underline">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
