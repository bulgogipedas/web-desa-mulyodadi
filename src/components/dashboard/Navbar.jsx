import { Link } from "react-router-dom";
import LogoKabupaten from "../../assets/svg/Logo.svg";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import Facebook from "../../assets/svg/u_facebook.svg";
import Instagram from "../../assets/svg/u_instagram-alt.svg";
import Youtube from "../../assets/svg/u_youtube.svg";
import React from "react";

const navLink = [
  {
    name: "Desa Mulyodadi",
    link: "/"
  },
  {
    name: "Informasi dan layanan",
    link: "/"
  },
  {
    name: "Jelajah Desa",
    link: "/"
  }
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-50 left-0 w-full  justify-between items-center text-black text-sm font-sans">
        {/**Header*/}
        <div className="flex font-sans py-4 bg-white items-center font-bold text-md px-[150px] justify-between">
          <div>
          <img src={LogoKabupaten} alt="Logo" className="w-[200px]" />  
          </div>
          <div className="flex">
            <img src={Facebook} alt="facebook" className="w-[32px] "/>
            <img src={Instagram} alt="instagram" className="w-[32px] mx-4" />
            <img src={Youtube} alt="youtube" className="w-[32px]" />
          </div>
        
        </div>
        {/**Navbar*/}
        <div className="py-4 items-center text-center font-medium">
          <ul className="text-white font-sans flex justify-center mx-10">
            <li className="mx-20">
              <a className="flex " href="">
                Mengenal Desa
                <img className="ml-2" src={ArrowDown} alt="Mengenal desa" />
              </a>
            </li>
            <li className="mx-20">
              <a className="flex" href="">
                Informasi dan layanan
                <img
                  className="ml-2"
                  src={ArrowDown}
                  alt="Informasi dan layanan"
                />
              </a>
            </li>
            <li className="mx-20">
              <a className="flex" href="">
                Jelajah Desa
                <img className="ml-2" src={ArrowDown} alt="Jelajah desa" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
