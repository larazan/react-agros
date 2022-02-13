import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/user_actions";
import { USER_UPDATE_RESET } from '../actions/types'

import compassLogo from "../assets/compass.png";

const Profile = ({ location, history }) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/')
    } else {
      if (!user.name || user.id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setCity(user.city)
        setUserId(user.id)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault();
      // dispatch(updateUserProfile({id: userId, name, email, password, city}));
  };

  return <>
    <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <div className="mt-8">
              <h3 className="text-3xl font-bold">Perbarui Profil</h3>
            </div>
            <div className="w-full mt-4">
              
              <section class="w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-2">
                <form onSubmit={submitHandler}>
                  <div class="grid grid-cols-4 gap-6  sm:grid-cols-2">
                    <div>
                      <label
                        class="text-gray-700 dark:text-gray-200 font-semibold"
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
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-gray-700 dark:text-gray-200 font-semibold"
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
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-gray-700 dark:text-gray-200 font-semibold"
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
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label
                        class="text-gray-700 dark:text-gray-200 font-semibold"
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
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                  </div>

                  <div class="grid grid-cols-4 gap-6  sm:grid-cols-2">
                  <div class="mt-6">
                    <button type="submit" class="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">
                      Perbarui Sekarang
                    </button>
                  </div>
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
    
  </>;
};

export default Profile;
