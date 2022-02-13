import React from "react";
import Card from "../components/Card";
import compassLogo from "../assets/compass.png";

const About = () => {
  return (
    <>
      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <div className="my-8">
              <h3 className="text-3xl font-bold">Tentang AGROS Indonesia</h3>
            </div>
            <div className="mb-10 max-w-4xl mx-auto">
              <section className="w-full p-6 mx-auto">
              <img src={compassLogo} alt="compass" className="h-80 w-80" />
              </section>
            </div>
            <div className="text-sm text-center mb-6">
              <p>Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold">Layanan AGROS Indonesia</h4>
              <div className="">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
