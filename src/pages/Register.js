import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/user_actions";

import compassLogo from "../assets/compass.png";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(register(name, email, password, city, role));
  };

  return (
    <>
      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <div className="mt-8">
              <h3 className="text-3xl font-bold">Daftar Sekarang</h3>
            </div>
            <div className="w-full">
              <div className="py-4">
                <h5 className="text-md ">Mari bergabung bersama Kerabat AGROS Indonesia lainnya.</h5>
              </div>
              <section className="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-2">
                <form onSubmit={submitHandler}>
                  <div className="grid grid-cols-4 gap-6  sm:grid-cols-2">
                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200 font-semibold"
                        for="username"
                      >
                        Nama Lengkap Kerabat
                      </label>
                      <input
                        id="username"
                        type="text"
                        value={name}
                onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Bambang"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200 font-semibold"
                        for="asal"
                      >
                        Asal kota
                      </label>
                      <input
                        id="asal"
                        type="text"
                        value={city}
                onChange={(e) => setCity(e.target.value)}
                        placeholder="Contoh: Pekalongan"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200 font-semibold"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                onChange={(e) => setEmail(e.target.value)}
                        placeholder="Contoh: bambang@gmail.com"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200 font-semibold"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                onChange={(e) => setPassword(e.target.value)}
                        placeholder="*****"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        className="text-gray-700 dark:text-gray-200 font-semibold"
                        for="role"
                      >
                        Role
                      </label>
                      <select
                      name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)} 
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        <option>Please select</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Guest">Guest</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-6  sm:grid-cols-2">
                  <div className="mt-6">
                    <button type="submit" className="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">
                      Gabung Sekarang
                    </button>
                  </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm">
                      Sudah memiliki Akun?{" "}
                      <Link to="/login">
                      <a href="#" className="text-green-500">
                        Masuk Sekarang
                      </a>
                      </Link>
                    </p>
                  </div>
                </form>
              </section>
            </div>
            <div className="mt-14 mb-14">
              <h3 className="text-2xl font-bold pb-8">
              Cerita Kerabat AGROS
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
