import React from "react";
import Instagram from "../../assets/svg/u_facebook.svg";
import Facebook from "../../assets/svg/u_instagram-alt.svg";
import Youtube from "../../assets/svg/u_youtube.svg";

export default function Footer() {
  return (
    <>
      <div className="text-white text-[18px]  bg-[#101820] px-24 py-[48px] ">
        <div className="items-center justify-center flex w-full mb-5">
          <img src={Instagram} alt="" className="w-[60px]" />
          <img src={Facebook} alt="" className="w-[60px] mx-5 " />
          <img src={Youtube} alt="" className="w-[60px] fill-white" />
        </div>
        <hr />
        <div className="flex justify-between mt-5">
          <div className="">
            <p>
              DESAMULYODADI.COM <br /> Kwarengan, Mulyodadi, Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur 61261 <br /> <a href="https://wa.me/0881036103424" target="blank">Telp: +62 881036103424</a> <br /> <a href="">pemdesmulyodadi88@gmail.com</a>
            </p>
            <p></p>
          </div>
          <div>
            <p>Media Social</p>
            <p>© 2023 Desa Mulyodadi, Kecamatan Wonoayu, Kabupaten Sidoarjo</p>
          </div>
        </div>
      </div>
    </>
  );
}
