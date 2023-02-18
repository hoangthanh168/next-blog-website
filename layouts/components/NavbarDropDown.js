import React from "react";
import Link from "next/link";
import{useState,useEffect} from "react"
const NavbarDropDown = () => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
 
  return (
    <>
      <section style={{height:`calc(${innerHeight}px)-50px`}} className="bg-[#f7f7f7] overflow-auto rounded-b-sm">
        <div className="container h-full">
          <div className="border-b border-gray-400 py-3">
            <span className="text-xl">Tất cả chuyên mục</span>
          </div>
          <div style={{height:`calc(${innerHeight}px - 103px)`}} className="flex w-full ]">
            <div className="w-[80%] h-full overflow-auto overscroll-contain flex ">
            <ul>

            </ul>
            </div>
            <div className="w-[20%] border-l border-gray-400 ">
              <div className="wrapper p-3">
                <ul className="border-gray-500 border-b pb-2">
                  <li className="hover:underline font-medium mb-2"><Link href='/'>Mới nhất</Link></li>
                  <li className="hover:underline font-medium mb-2"><Link href='/'>Xem nhiều</Link></li>
                  <li className="hover:underline font-medium mb-2"><Link href='/'>Gần đây</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarDropDown;
