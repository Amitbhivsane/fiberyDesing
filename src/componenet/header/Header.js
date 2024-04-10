import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ onContactClick }) => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <div className="bg-white p-4">
        <div className="max-w-[1240px] mt-[30px]  items-center  mx-auto flex justify-between">
          <div className="text-3xl">Fibery</div>
          {toogle ? (
            <FontAwesomeIcon
              onClick={() => setToogle(!toogle)}
              icon={faXmark}
              className="md:hidden block"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setToogle(!toogle)}
              icon={faBars}
              className="md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-black gap-5">
            <li className="p-3">Solution</li>
            <li className="p-3">Product</li>
            <li className="p-3">Resource</li>
            <li className="p-3">Pricing</li>
            <li className="p-3">Login</li>
            <li className="p-3">
              <button
                className=" p-1 border  border-red-950"
                onClick={onContactClick}
              >
                Get A Demo
              </button>
            </li>

            <li className="p-3">Try For Free</li>
          </ul>
          {/* Respensive menu */}

          <ul
            className={` duration-300 md:hidden w-full bg-yellow-200 h-screen
         text-black fixed bg-white left-0 top-[90px]

         ${toogle ? `left-[0]` : `left-[-100%]`}
         `}
          >
            <li className="p-3">Solution</li>
            <li className="p-3">Product</li>
            <li className="p-3">Resource</li>
            <li className="p-3">Pricing</li>
            <li className="p-3">Login</li>
            <li className="p-3">
              <button
                className=" p-1 border  border-red-950"
                onClick={onContactClick}
              >
                Get A Demo
              </button>
            </li>

            <li className="p-3">Try For Free</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Header.js
// import React from "react";

// const Header = ({ onContactClick }) => {
//   return (
//     <header className="bg-blue-500 text-white py-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-semibold">MySite</div>
//         <ul className="flex space-x-4">
//           <li>
//             <a
//               href="#about"
//               className="hover:text-blue-200 transition-colors duration-200"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <button
//               onClick={onContactClick}
//               className="hover:text-blue-200 transition-colors duration-200"
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
