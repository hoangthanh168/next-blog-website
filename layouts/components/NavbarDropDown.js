// import React from "react";

// const NavbarDropDown = () => {
//   return (
//     <>
//       <section className="navbar-drop-down absolute hidden z-10 inset-0 bg-white">
//         <div className="container">
//           <div className="header border-b border-b-gray-400">header</div>
//           <div className="flex">
//             <div className="content-left ">askdasdjaskld</div>
//             <div className="content-right ">askdasdjaskld</div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NavbarDropDown;
import React from "react";

const NavbarDropDown = () => {
  const categories = ["Sports", "Politics", "Education", "Business",
  "Sports", "Politics", "Education", "Business","Sports", "Politics", "Education", "Business"
,"Sports", "Politics", "Education", "Business"
,"Sports", "Politics", "Education", "Business"
,"Sports", "Politics", "Education", "Business"
,"Sports", "Politics", "Education", "Business"];

  return (
    <div className="navbar-dropdown z-50">
      <div className="container flex justify-between py-4">
        <div className="navbar-dropdown-column">
          <h4 className="text-lg font-bold mb-4">More Categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={category} className="text-gray-600 py-2">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-dropdown-column">
          <h4 className="text-lg font-bold mb-4">Popular Articles</h4>
          <ul>
            <li className="text-gray-600 py-2">
              <a href="#">The Best Movies of 2022</a>
            </li>
            <li className="text-gray-600 py-2">
              <a href="#">10 Tips for Better Sleep</a>
            </li>
            <li className="text-gray-600 py-2">
              <a href="#">How to Build a Successful Business</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
