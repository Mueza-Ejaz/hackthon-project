import Image from "next/image";
import Link from "next/link";


const JoinUs = () =>{
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[380px] space-y-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo2.png" // Replace with your actual logo file
            alt="Nike Logo"
            width={60}
            height={30}
          />
        </div>

        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold tracking-tight">BECOME A NIKE MEMBER</h1>
          <p className="text-lg text-gray-500 tracking-wide">
            Create your Nike Member profile and get first access to the very best of Nike products inspiration and community.
          </p>
        </div>

        {/* Sign-Up Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-500 text-md"
          />
          <p className="text-xs text-gray-500">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Dropdown */}
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-black text-gray-500 text-md"
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>

          {/* Gender Options */}
          <div className="flex gap-4">
            <button
              type="button"
              className="w-full border text-gray-500 border-gray-300 py-3 text-md rounded-sm hover:bg-gray-100"
            >
              Male
            </button>
            <button
              type="button"
              className="w-full border text-gray-500 border-gray-300 py-3 text-md rounded-sm hover:bg-gray-100"
            >
              Female
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="email-updates"
              className="w-4 h-4 border-gray-300 rounded-sm focus:ring-2 focus:ring-black"
            />
            <label htmlFor="email-updates" className="text-xs text-gray-500">
              Sign up for emails to get updates from Nike on products offers and Member benefits.
            </label>
          </div>

          {/* Terms and Conditions */}
          <div className="text-xs text-center text-gray-500">
            By creating an account you agree to Nikes{" "}
            <Link href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-gray-700">
              Terms of Use
            </Link>
            .
          </div>

          {/* Join Us Button */}
          <button className="w-full bg-black text-white hover:bg-gray-900 py-2 rounded-md">
            JOIN US
          </button>
        </form>

        {/* Sign In Link */}
        <div className="text-sm text-center text-gray-500">
          Already a Member?{" "}
          <Link href="#" className="text-black hover:underline underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;