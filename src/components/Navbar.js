import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"> REACT.</h1>
      <ul className="hidden sm:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className=" sm:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className="sm:hidden">
        <div
          className={
            !nav
              ? "fixed left-0 top-20 w-full h-full border-r-gray-900 bg-[#000300] z-10"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-2 uppercase ">
            <li className="p-2 border-b flex justify-center border-gray-600">
              Home
            </li>
            <li className="p-2 border-b flex justify-center border-gray-600">
              Company
            </li>
            <li className="p-2 border-b flex justify-center border-gray-600">
              Resources
            </li>
            <li className="p-2 border-b flex justify-center border-gray-600">
              About
            </li>
            <li className="p-2 flex justify-center">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
