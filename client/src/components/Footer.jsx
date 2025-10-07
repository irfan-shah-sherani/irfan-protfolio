import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black pt-20 pb-8 dark:bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">irfan</h2>
          </div>
          <div>
            <h3 className="font-semibold mb-3 dark:text-white ">Quick Links</h3>
            <ul className="space-y-2 text-black dark:text-white">
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Insights</h3>
            <ul className="space-y-2 text-black dark:text-white">
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Location</h3>
            <p className="text-black">
              Irfan khan sherani<br />
              pakistan, Islamabad
            </p>
          </div>
        </div>
        <div className="mt-8 ">
          <h3 className="font-semibold dark:text-white">Contact Us</h3>
          <p className="text-black dark:text-white">mrirfanshahsherani@gmail.com</p>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black dark:text-white">
          <p>© 2024  . All rights reserved.</p>
          <div className="flex gap-4 text-lg mt-4 md:mt-0 dark:text-white">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
    
        <div className="flex justify-center gap-6 text-xs text-black  dark:text-white">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund & Cancellation</a>
        </div>
      </div>
    </footer>
  );
}
