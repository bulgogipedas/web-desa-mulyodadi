import React, { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import BgHome from "../assets/images/bg_home.jpg";
import KabupatenLogo from "../assets/images/kabupaten-logo.png";
import Carousel from "../components/dashboard/Carousel";
import Footer from "../components/dashboard/Footer";
import Scrollbar from "../components/dashboard/Scrollbar";

const information = [
  {
    name: "Layanan Kependudukan",
    contents: [
      {
        layanan: "Kartu Tanda Penduduk",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
  {
    name: "Pendidikan",
    contents: [
      {
        layanan: "KTM",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
  {
    name: "Pengaduan Warga",
    contents: [
      {
        layanan: "Kartu Tanda Penduduk",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
  {
    name: "Ikeeehhh",
    contents: [
      {
        layanan: "Kartu Tanda Penduduk",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
  {
    name: "Dummy woi",
    contents: [
      {
        layanan: "Kartu Tanda Penduduk",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
  {
    name: "Dummy",
    image: BgHome,
    contents: [
      {
        layanan: "Kartu Tanda Penduduk",
        url: "",
      },
      {
        layanan: "Kartu Identitas Anak",
        url: "",
      },
      {
        layanan: "Kartu Keluarga",
        url: "",
      },
      {
        layanan: "Akta Kelahiran",
        url: "",
      },
      {
        layanan: "Akta Kematian",
        url: "",
      },
      {
        layanan: "Akta Perceraian",
        url: "",
      },
    ],
  },
];

export default function Dashboard() {
  const [name, setName] = useState("Pendidikan");
  return (
    <>
      <Navbar />

      <div
        className="pt-32 relative min-h-screen flex items-center overflow-hidden  font-sans bg-cover bg-center"
        style={{ backgroundImage: `url("${BgHome}")` }}
      >
        <div className=" bg-black/30 backdrop-brightness-75 absolute left-0 right-0 top-0 bottom-0"></div>
        <div className="mx-[200px] items-center text-white z-10 font-sans ">
          <img src={KabupatenLogo} alt="" className="w-[100px]" />
          <h1 className="text-4xl font-medium my-5">Desa Mulyodadi</h1>
          <p className="w-[50%] text-justify text-[20px]">
            Kehidupan perdesaan yang semarak dengan berbagai keragaman, dari
            warisan budaya hingga destinasi kelas dunia yang menyenangkan.
            Selamat datang!
          </p>
        </div>
      </div>
      <div className="my-24 mx-[200px]">
        <Scrollbar />
      </div>
      <div className="py-20 bg-[#101820] rounded-t-[100px]">
        <h1 className=" mx-[100px] text-[40px] text-white mb-[45px]">
          Informasi dan Layanan
        </h1>

        <div className="mx-[100px] flex">
          <div>
            <ul className="text-[13px] mr-16 flex flex-wrap min-w-[300px]">
              {information.map((items, index) => {
                return (
                  <li className="m-3" key={index}>
                    <button onClick={()=>{
                      setName(items.name)
                    }} className="bg-white w-[222px] h-[50px] rounded-md text-black hover:font-bold duration-100 ">
                      {items.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex text-white mx-20">
            <div
              className="w-[300px] h-[473px] bg-white mr-10 bg-cover bg-center"
              style={{ backgroundImage: `url('${BgHome}')` }}
            >
              {/* <img src={BgHome} alt="" className="max-w-full "/> */}
            </div>
            <section>
                    <h1 className="font-medium text-xl mb-2">
                      {name}
                    </h1>
                    <hr />
                    <ul className="mt-4">
            {information
              .find((item) => {
                return item.name === name;
              })
              .contents.map((child, index) => {
                return (
                      <li className="hover:underline duration-200">
                        <a href={child.url}>{child.layanan}</a>
                      </li>

                );
              })}
              </ul>
                  </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
