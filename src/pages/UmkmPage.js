import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
import UMKM from "../img/umkm1.jpeg"
import Shopee from "../img/shopee.png";
import Instagram from "../img/instagram.png"

export default function UmkmPage() {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   try {
  //     const response = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
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
    <h2 className='text-slate-800 font-semibold text-2xl'>BANGKIT UMKM <span className='text-sky-400'>#Sindang Jaya</span></h2>
    </div>
    <div className='w-full border-t boder-sky-800 '>
    </div>
      <div className="mt-5">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center ">
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow rounded-md shadow-md">
                  <img src={UMKM} alt="gambar" width="w-full" />
                  <div className="p-3">
                    <h3 className="mt-5 mb-5 text-xl font-semibold text-dark"><span className='text-sky-400'>Zscondbrnds.id</span> Pelopor Thrifting Sindang Jaya</h3>
                    <p className="text-base font-medium text-secondary text-justify  mb-5">Kini di Sindang jaya ada Thrifting jaket yang berkualitas dan ramah di kantong, dimana lagi cuma ada di Zscondbrnds.id , bagi warga sindang jaya dan sekitarnya bisa langsung datang saja ke toko di jalan sindang jaya no.22 . Yuks Kepoin Media Sosial dan Marketplace nya </p>
                    <div class="mb-5 flex items-center justify-center">
                    <a href="https://shopee.co.id/zsecondbrnds.id" target="_blank" class="mr-3 flex h-9 w-9 items-center justify-center ">
                      <img src={Shopee}/>
                    </a>
                    <a href="https://instagram.com/zsecondbrnds?igshid=MDM4ZDc5MmU=" target="_blank" class="mr-3 flex h-9 w-9 items-center justify-center ">
                      <img src={Instagram}/>
                    </a>
                    </div>
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
