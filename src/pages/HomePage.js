// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Berita1 from "../img/berita1.jpg"
import Navbar from "../components/Navbar";

export default function HomePage() {
  // const [news, setNews] = useState([]);

  // const getNews = async () => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=62b64518b4d548a193b591832eb4e86e');
  //     setNews(response.data.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getNews();
  // }, []);
  const title = ' Berita';
  document.title = 'Info Sinjay | ' + title;
  return (
    <>
    <Navbar title={title} />
    <div className='mt-32'>
    <div className='text-center mb-3 md:text-start md:mx-2'>
    <h2 className='text-slate-800 font-semibold text-2xl'>BERITA TERKINI <span className='text-sky-400'>#Sindang Jaya</span></h2>
    </div>
    <div className='w-full border-t boder-sky-800 '>
    </div>
      <div className="mt-5">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center ">
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow rounded-md shadow-md">
                  <img src={Berita1} alt="gambar" width="w-full" />
                  <div className="p-3">
                    <h3 className="mt-5 mb-5 text-xl font-semibold text-dark">Jalan Rusak, Emak-Emak Sindang Jaya Demo minta diperbaiki</h3>
                    <p className="text-base font-medium text-secondary text-justify  mb-5">Sejumlah warga di Desa Sindang Jaya, Kecamatan Sindang Jaya, Kabupaten Tangerang, melakukan demonstrasi meminta pemerintah setempat untuk memperbaiki akses jalan kawasan permukiman penduduk yang rusak berat Dalam demonstrasi tersebut, warga pun melakukan aksi dengan menanam pohon pisang dan menutup akses jalan yang rusak tersebut.</p>
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
