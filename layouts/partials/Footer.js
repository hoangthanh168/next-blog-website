import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#f5f5f5]">
        <div className="container flex p-10">
          <div className="col-left px-5 border-r border-gray-300">
            <ul >
              <li className="pb-3 hover:underline">
                <Link href="/">Trang chủ</Link>
              </li>

              <li className="pb-3 hover:underline">
                <Link href="/about">Giới thiệu</Link>
              </li>
              <li className="pb-3 hover:underline">
                <Link href="/">Góp ý</Link>
              </li>
              <li className="pb-3 hover:underline">
                <Link href="/">Liên hệ quảng cáo</Link>
              </li>
              <li className="pb-3 hover:underline">
                <Link href="/">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>
          <div className="col-middle px-5 text-xs border-r border-gray-300">
            <div className="footer-fanpage">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                height="70"
                className="border-none overflow-hidden"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="footer-email p-5 w-[300px] border border-gray-300 mt-3">
              <div className="flex items-center justify-center">
                <figure className="max-w-[64px]">
                  <img
                    src="https://cdn.eva.vn/images/2017/Eva-Logo.svg"
                    alt=""
                  />
                </figure>
                <div className="pl-5">
                  <div><span className="font-medium">Ý KIẾN BẠN ĐỌC</span></div>
                  <div>
                    <span>bandoc@toidilamdep.com</span>
                  </div>
                </div>
              </div>
              <div className="">
                <p >toidilamdep.vn hi vọng sẽ nhận được nhiều đóng góp và tâm sự từ quý độc giả</p>
              </div>  
            </div>
          </div>
          <div className="col-right px-5">
              <div className="owner-info pb-3">
                  <p className="font-medium">CHỊU TRÁCH NHIỆM QUẢN LÝ NỘI DUNG</p>
                  <p>Hoàng Đức Thành</p>
              </div>
              <div className="owner-contact-phone pb-3">
                  <p className="font-medium">Liên hệ</p>
                  <p>0865 111 864</p>
              </div>
              <div className="owner-contact-email pb-3">
                  <p className="font-medium" >Liên hệ Email</p>
                  <p>contact@toidilamdep.vn</p>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
