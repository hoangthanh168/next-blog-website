import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BsHash } from "react-icons/bs";
const WidgetTicker = () => {
  return (
    <>
      <section className="widget-ticker">
        <div className="container flex py-3 items-center">
          <div className="circle-icon rounded-full bg-gradient-to-t from-[#FF9233] to-[#FF1206] w-6 h-6 mr-2 flex justify-center items-center">
            <AiFillFire className="fill-white" />
          </div>
          <div className="trending-tags flex items-center">
            <div className="tag-item bg-slate-200 flex items-center p-[3px] px-6 rounded-2xl">
              <BsHash />
              <span>Động đất thảm khốc ở Thổ Nhĩ Kỳ, Syria</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WidgetTicker;
