import React from 'react';
import UMKM from "../img/umkm1.jpeg"
import Shopee from "../img/shopee.png";
import Instagram from "../img/instagram.png"
import Navbar from '../components/Navbar';

export default function UmkmPage() {
  const title = "Bangkit UMKM";
  document.title = "Info Sinjay | " + title;
  return (
    <>
      <Navbar title={title} />
      <div className='pt-32 md:mx-10'>
        <div className="px-5 pb-3 border-b border-sky-800">
          <h2 className="font-bold text-2xl">INFO UMKM <span className="text-teal-400">#Sindang Jaya</span> </h2>
          <hr/>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='px-5 py-5'>
            <img src={ UMKM} />
          </div>
          <div className='px-5 py-5 text-justify'>
            <h3 className='font-bold text-lg pb-5'><span className='text-teal-400'> Zscondbrnds.id</span> Pelopor Thrifting Sindang Jaya</h3>
            <p>Kini di Sindang jaya ada Thrifting jaket yang berkualitas dan ramah di kantong, dimana lagi cuma ada di Zscondbrnds.id , bagi warga sindang jaya dan sekitarnya bisa langsung datang saja ke toko di jalan sindang jaya no.22 . Yuks Kepoin Media Sosial dan Marketplace nya </p>
            <div className='pt-5 flex'>
              <a href='https://shopee.co.id/zsecondbrnds.id' className='pr-3'><img src={Shopee} className="h-9 w-9" /></a>
              <a href='https://instagram.com/zsecondbrnds?igshid=MDM4ZDc5MmU'><img src={Instagram} className="h-9 w-9" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
