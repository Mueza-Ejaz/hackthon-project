import { Search } from "lucide-react";
import { MdOutlinePhoneIphone, MdTextsms, MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io";

const Help = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6 text-center">GET HELP</h1>
          <div className="relative max-w-xl w-full">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-600" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Options Section */}
            <section>
              <h2 className="text-xl font-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className=" mb-4">
                We want to make buying your favourite Nike shoes and gear online
                fast and easy and we accept the following payment options:
              </p>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  Visa Mastercard Diners Club Discover American Express Visa
                  Electron Maestro
                </li>
                <li>
                  If you enter your PAN information at checkout youll be able to
                  pay for your order with PayTM or a local credit or debit card
                </li>
                <li>Apple Pay</li>
              </ul>
              <p className="mt-4 mb-2">
                <span className="font-medium underline">Nike Members</span> can
                store multiple debit or credit cards in their profile for faster
                checkout. If youre not already a Member
                <span className=" underline"> join us today</span>.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="px-6 py-2 bg-black text-white font-medium  shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all rounded-3xl">
                  JOIN US
                </button>
                <button className="px-6 py-2 bg-black text-white font-medium  shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all rounded-3xl">
                  SHOP NIKE
                </button>
              </div>
            </section>

            {/* FAQ TEXT */}
            <div className="max-w-2xl mx-auto font-sans mr-36">
              <h2 className="text-xl font-bold mb-4">FAQs</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-1">
                    Does my card need international purchases enabled?
                  </h3>
                  <p className="text-md mb-1">
                    Yes we recommend asking your bank to enable international
                    purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                  </p>
                </div>

                <div>
                  <p className="text-md">
                    Please note some banks may charge{" "}
                    <span className="underline">a small transaction fee </span>{" "}
                    for international orders.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-1">
                    Can I pay for my order with multiple methods?
                  </h3>
                  <p className="text-md">
                    No payment for Nike orders cant be split between multiple
                    payment methods.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    What payment method is accepted for SNKRS orders?
                  </h3>
                  <p className="text-md">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    Why dont I see Apple Pay as an option?
                  </h3>
                  <p className="text-md">
                    To see Apple Pay as an option in the Nike App or on Nike.com
                    youll need to use a compatible Apple device running the
                    latest OS be signed in to your iCloud account and have a
                    supported card in your Wallet. Additionally youll need to
                    use Safari to use Apple Pay on Nike.com.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-md mb-2">Was this answer helpful?</p>
                <div className="flex space-x-2 mb-4">
                  <button className="w-8 h-8 borderflex items-center justify-center">
                    <IoIosThumbsUp className="text-3xl" />
                  </button>
                  <button className="w-8 h-8 borderflex items-center justify-center">
                    <IoIosThumbsDown className="text-3xl" />
                  </button>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold">RELATED</p>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <section>
              <h2 className="text-lg font-semibold mb-4">RELATED</h2>
              <ul className="space-y-2 font-bold">
                <li>
                  <a href="#" className="underline">
                    WHAT ARE NIKES DELIVERY OPTIONS?
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-8 mx-auto px-24 text-center">
            <section>
              <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-center">
                    <MdOutlinePhoneIphone className="text-4xl mb-4" />
                  </div>
                  <p className="font-medium">000 800 919 6566</p>
                  <p className="text-sm text-gray-600">
                    Products & Orders: 24 hours a day
                  </p>
                  <p className="text-sm text-gray-600">7 days a week</p>

                  <p className="text-sm text-gray-600">
                    Company Info & Enquiries: 07:30 - 16:30 Monday - Friday
                  </p>
                </div>

                <div>
                  <div className="flex justify-center">
                    <MdTextsms className="text-4xl mb-4" />
                  </div>
                  <p className="font-medium">24 hours a day</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <TfiEmail className="text-4xl mb-4" />
                  </div>
                  <p className="font-medium">Well reply within</p>
                  <p className="text-sm text-gray-600">five business days</p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <MdLocationPin className="text-4xl mb-4" />
                  </div>
                  <p className="font-medium">STORE LOCATOR</p>
                  <p className="text-sm text-gray-600">
                    Find Nike retail stores near you.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
