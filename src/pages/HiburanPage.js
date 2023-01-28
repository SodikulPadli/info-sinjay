import React from 'react';
import Hutan from "../img/hutanjati.jpg";
import Navbar from '../components/Navbar';

export default function HiburanPage() {
  const title = "Wisata Unggul";
  document.title = "Info Sinjay | " + title;
  return (
    <>
      <Navbar title={title} />
      <div className="pt-32 md:mx-10 ">
        <div className="px-5 pb-3 border-b border-sky-800">
          <h2 className="font-bold text-2xl">INFO WISATA <span className="text-teal-400">#Sindang Jaya</span> </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="px-5 py-5">
            <img src={Hutan} />
          </div> 
          <div className="px-5 py-5 text-justify">
            <h3 className="font-bold pb-5 text-lg">Wisata Hutan Jati Murah Meriah Kini ada di Sindang Jaya</h3>
            <p>Akhir pekan merupakan waktunya yang tepat melepas penat, setelah satu minggu lamanya fokus bekerja. Wisata bareng keluarga merupakan salah satu pilihan. Wisata Hutan Jati Sindang Jaya, merupakan salah satu objek wisata keluarga, maupun dengan pasangan .Selain harganya yang murah meriah, tempat ini pun banyak sekali menawarkan wahana bermain yang disukai mulai dari anak - anak hingga orang dewasa.</p>
          </div>
        </div>
      </div>
    </>
  );
}
