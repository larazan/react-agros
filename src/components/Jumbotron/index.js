import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user_actions";

const Jumbotron = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-400 to-green-700 shadow-2xl rounded-lg mx-auto p-6 mt-4">
        <h2 className="text-xl leading-9 font-bold tracking-tight text-white sm:text-2xl sm:leading-10">
          Selamat datang, Kerabat!
        </h2>
        <div className="w-3/4 py-4">
          <p className="text-white text-sm">
            Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik
            Anda. Melayani dengan sepenuh hati untuk kenyaman Anda dan keamanan
            barang sampai pada tujuan. Silakan melakukan pendaftaran untuk dapat
            menikmati layanan kami.
          </p>
          <div className="flex flex-wrap space-x-3 pt-6">
            {userInfo ? (
              <>
                <Link to="" onClick={logoutHandler}>
                  <button
                    type="button"
                    className=" px-4 py-1 text-sm font-semibold text-white transition-colors duration-300 shadow py-3 bg-transparent rounded hover:bg-green-600 focus:outline-none focus:ring-green-200 focus:ring-4 uppercase"
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className=" px-4 py-1 text-sm font-semibold text-white transition-colors duration-300 shadow py-3 bg-transparent rounded hover:bg-green-600 focus:outline-none focus:ring-green-200 focus:ring-4 uppercase"
                  >
                    Masuk
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className=" px-4 py-1 text-sm font-semibold text-green-400 transition-colors duration-300 shadow py-3 bg-white rounded hover:bg-green-600 hover:text-white focus:outline-none focus:ring-green-200 focus:ring-4 uppercase"
                  >
                    Daftar
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
