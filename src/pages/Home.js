import React from "react";
import { Link } from 'react-router-dom'
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";

import compassLogo from "../assets/compass.png";

const Home = () => {
  return (
    <>
      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <Jumbotron />
            <div className="mt-8">
              <h3 className="text-xl font-bold">
                Mengenal AGROS Indonesia Lebih Dekat
              </h3>
              <p className="py-4 text-justify">
                Agros adalah sistem terpadu satu pintu—one stop service yang
                berfokus pada pelayanan jasa logistik muatan berat. Agros
                menawarkan mitra terlatih, efisiensi dan transparansi sistem
                transportasi, kemudahan akses untuk layanan pemeliharaan hingga
                fitur transaksi.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold">Layanan AGROS Indonesia</h4>
              <div className="">
                <Card />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold pb-8">
                Mengenal AGROS Indonesia Lebih Dekat
              </h3>
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-1/3">
                  <img src={compassLogo} alt="compass" className="h-50 w-50" />
                </div>
                <div className="w-2/3 pl-4">
                  <p className="text-justify">
                    Terinspirasi dari arah mata angin yang membawa pada satu
                    destinasi, Agros akan terus bergerak menciptakan pemerataan
                    ekonomi sehingga bisa menjadi penghubung para stakeholders
                    dalam aktivitas muatan berat, mulai dari shipper,
                    transporter, driver, mitra pemeliharan, seller dan buyer
                    intermoda yang menjangkau seluruh penjuru Nusantara.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Mitra AGROS</h3>
              <p className="py-4 text-justify">
                Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
                keamanan kepada para pelanggan setia AGROS Indonesia.Untuk
                melihat daftar pelanggan kami, silakan melakukan pendaftaran.
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-20">
            <Link to="/register">
            <button
              type="button"
              className=" px-4 py-2 text-md font-semibold text-white transition-colors duration-300 shadow py-3 bg-green-700 rounded hover:bg-green-600 focus:outline-none focus:ring-green-200 focus:ring-4"
            >
              Gabung Sekarang
            </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
