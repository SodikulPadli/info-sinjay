import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div>
        <div className="my-3 lg:mx-auto lg:text-center">
          <a href="#">
            <h1 className="font-bold px-4 text-3xl text-sky-400 ">Info Sinjay</h1>
          </a>
        </div>
        <div>
          <nav className="p-4 bg-slate-200">
            <ul className="flex flex-wrap justify-between lg:justify-center ">
              <Link to="/">
                <li className=" px-3 text-lg cursor-pointer lg:mx-5 block  hover:border-b-4 hover:border-double hover:border-sky-400">
                  <a className="">Berita</a>
                </li>
              </Link>
              <Link to="/umkm">
                <li className=" px-3 text-lg cursor-pointer lg:mx-5">
                  <a className="block  hover:border-b-4 hover:border-double hover:border-sky-400">UMKM</a>
                </li>
              </Link>
              <Link to="/hiburan">
                <li className=" px-3 text-lg cursor-pointer lg:mx-5">
                  <a className="block  hover:border-b-4 hover:border-double hover:border-sky-400">Hiburan</a>
                </li>
              </Link>
              <Link to="/wilayah">
                <li className=" px-3 text-lg cursor-pointer lg:mx-5">
                  <a className="block  hover:border-b-4 hover:border-double hover:border-sky-400">Peta Wilayah</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
