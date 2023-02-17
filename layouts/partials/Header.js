import Logo from "@layouts/components/Logo";
import React, { useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import NavbarDropDown from "@layouts/components/NavbarDropDown";

const header = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [showMoreButton, setShowMoreButton] = useState(true);
  useEffect(() => {});

  const getNavItemClasses = (itemName) => {
    const baseClasses = "border-b-4 mr-5 h-full";
    if (activeItem === itemName) {
      return `${baseClasses} border-blue-500 text-blue-500`;
    } else {
      return `${baseClasses} border-transparent`;
    }
  };
  const handleShowMoreButtonClick = () => {
    setShowMoreButton(!showMoreButton);
  };
  const categories = ["Technology", "Entertainment", "Life", "World"];
  return (
    <>
      <header className="sticky top-0 z-1000 bg-white h-9 transition-all">
        <nav className=" navbar container">
          <div>
            <Logo />
          </div>
          <ul className="menu-category">
            {categories.map((category) => (
              <li className={getNavItemClasses(category) }
                onClick={() => setActiveItem(category)}>
                <Link href="/">{category}</Link>
              </li>
            ))}
          </ul>
          <button className="show-more pl-3" onClick={handleShowMoreButtonClick}>
            {showMoreButton ? (
              <FiMoreHorizontal className="w-6 h-6" />
            ) : (
              <GrClose className="w-6 h-6" />
            )}
          </button>
          <div className="tool-box flex">
            <button>
              <AiOutlineSearch className="w-6 h-6 mr-3" />
            </button>
            <Link href="">
              <AiOutlineUser className="w-6 h-6" />
            </Link>
          </div>
        </nav>
        { !showMoreButton && <NavbarDropDown/>}
      </header>
     
    </>
  );
};
