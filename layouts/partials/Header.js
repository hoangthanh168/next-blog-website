import Logo from "@layouts/components/Logo";
import React, { useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import NavbarDropDown from "@layouts/components/NavbarDropDown";

const Header = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [showMoreButton, setShowMoreButton] = useState(true);
  useEffect(() => 
  {
    if (!showMoreButton) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },[showMoreButton]);

  const getNavItemClasses = (itemName) => {
    const baseClasses = " mr-5 h-full flex items-center h-full";
    if (activeItem === itemName) {
      return `${baseClasses} text-blue-500`;
    } else {
      return `${baseClasses}  `;
    }
  };
  const handleShowMoreButtonClick = () => {
    setShowMoreButton(!showMoreButton);
  };
  const categories = ["Công nghệ", "Giải trí", "Cuộc sống", "Thế giới","Giới trẻ"];
  return (
    
    <>
      <header className=" fixed w-full h-[50px] z-50 ">
        <nav className="navbar container ">
          <div>
            <Logo />
          </div>
          <ul className="menu-category h-full ">
            {categories.map((category) => (
              <li
              
                className={getNavItemClasses(category)}
                onClick={() => setActiveItem(category)}
              >
                <Link className="text-base font-medium" href="/">{category}</Link>
              </li>
            ))}
            <li className="flex items-center relative">
              <button
                className="show-more pl-3 w-full h-full"
                onClick={handleShowMoreButtonClick}
              >
                {showMoreButton ? (
                  <FiMoreHorizontal className="w-5 h-5" />
                ) : (
                  <GrClose className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>
          <div className="tool-box flex items-center">
            <button>
              <AiOutlineSearch className="w-6 h-6 mr-3" />
            </button>
            <Link href="">
              <AiOutlineUser className="w-6 h-6" />
            </Link>
          </div>
        </nav>
        {!showMoreButton &&<NavbarDropDown/> }
      </header>
    </>
  );
};
export default Header;
