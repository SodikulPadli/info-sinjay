import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png"

export default function Navbar() {
  return (
    <>
    <nav className='relative'>
<div className='flex flex-wrap items-center bg-slate-800 fixed top-0 left-0 right-0'>
<div className='flex-auto mx-2'>
  <img src={Logo} width={100}/>
</div>
  <div  className='flex-auto '>
  <Link to="/">
  <p className='text-base font-semibold text-white hover:text-sky-300'> BERITA</p>
  </Link>
  </div>
    <div  className='flex-auto'>
      <Link to="/umkm">
    <p className='text-base font-semibold text-white  hover:text-sky-300'> UMKM</p>
    </Link>
    </div>
    <div  className='flex-auto'>
      <Link to="/hiburan">
    <p className='text-base font-semibold text-white  hover:text-sky-300'> WISATA</p>
    </Link>
    </div>
</div>
     
</nav> 
    </>
  );
}
