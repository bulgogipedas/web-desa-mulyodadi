import React from "react";
import Navbar from "../components/dashboard/Navbar";
import BgHome from "../assets/images/bg_home.jpg";
import KabupatenLogo from "../assets/images/Kabupaten_logo.png";
import Carousel from "../components/dashboard/Carousel";
import Footer from "../components/dashboard/Footer";
import Scrollbar from "../components/dashboard/Scrollbar";
export default function Dashboard() {
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
        <Scrollbar/>
      </div>
      <div className="py-20 bg-[#101820] rounded-t-[100px]">
        <h1 className=" mx-[100px] text-[40px] text-white mb-[45px]">
          Informasi dan Layanan
        </h1>

        <div className="mx-[100px] flex">
          <div className="flex">
            <ul className="text-[13px] mr-16">
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px]  items rounded-md text-black hover:font-bold duration-100 ">
                  Layanan Kependudukan
                </button>
              </li>
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px] items-center rounded-md text-black hover:font-bold duration-300">
                  Pendidikan
                </button>
              </li>
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px] items-center rounded-md text-black hover:font-bold duration-300">
                  Pengaduan Warga
                </button>
              </li>
            </ul>
            <ul className="text-[13px]">
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px]  items-center rounded-md text-black hover:font-bold duration-100 ">
                  Layanan Kependudukan
                </button>
              </li>
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px] items-center rounded-md text-black hover:font-bold duration-300">
                  Pendidikan
                </button>
              </li>
              <li className="mb-5">
                <button className="bg-white w-[222px] h-[50px] items-center rounded-md text-black hover:font-bold duration-300">
                  Pengaduan Warga
                </button>
              </li>
            </ul>
          </div>
          <div className="flex text-white mx-20">
            <div className="w-[300px] h-[473px] bg-white mr-10 bg-cover bg-center" style={{backgroundImage: `url('${BgHome}')`}}>

            {/* <img src={BgHome} alt="" className="max-w-full "/> */}
            </div>
            <section>
              <h1 className="font-medium text-xl mb-2">Layanan Kependudukan</h1>
              <hr />
              <ul className="mt-4">
                <li className="hover:underline duration-200"><a href="/">Kartu Tanda Penduduk</a></li>
                <li>Kartu Identitas Anak</li>
                <li>Kartu Keluarga</li>
                <li>Akta Kelahiran</li>
                <li>Akta Kematian</li>
                <li>Akta Perceraian</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
