import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Hutan  from "../img/hutanjati.jpg"

export default function HiburanPage() {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   try {
  //     const response = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data');
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <div className='mt-32'>
    <div className='text-center mb-3 md:text-start md:mx-2'>
    <h2 className='text-slate-800 font-semibold text-2xl'>WISATA UNGGUL <span className='text-sky-400'>#Sindang Jaya</span></h2>
    </div>
    <div className='w-full border-t boder-sky-800 '>
    </div>
      <div className="mt-5">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center ">
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow rounded-md shadow-md">
                  <img src={Hutan} alt="gambar" width="w-full" />
                  <div className="p-3">
                    <h3 className="mt-5 mb-5 text-xl font-semibold text-dark">Wisata Hutan Jati Murah Meriah Kini ada di Sindang Jaya</h3>
                    <p className="text-base font-medium text-secondary text-justify  mb-5">Akhir pekan merupakan waktunya yang tepat melepas penat, setelah satu minggu lamanya fokus bekerja. Wisata bareng keluarga merupakan salah satu pilihan. Wisata Hutan Jati Sindang Jaya, merupakan salah satu objek wisata keluarga, maupun dengan pasangan .Selain harganya yang murah meriah, tempat ini pun banyak sekali menawarkan wahana bermain yang disukai mulai dari anak - anak hingga orang dewasa.</p>
                    <p className="text-base font-sm text-sky-400"> Sumber : info sinjay </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      </div>
    </>
  );
}
