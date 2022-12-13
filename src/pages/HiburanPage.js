import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HiburanPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-full px-4 mt-5">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h4 className="mb-2 text-lg font-semibold text-primary"> Audio Al-Quran Lengkap</h4>
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Al-quran indonesia</h2>
        </div>
      </div>
      {data.map((item) => (
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center ">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow rounded-md shadow-md">
                <div className="p-3">
                  <h3 className="mt-5 mb-5 text-xl font-semibold text-dark">{item.nama}</h3>
                  <p className="text-base font-medium text-secondary">{item.arti}</p>
                  <p className="text-base font-medium text-secondary">{item.asma}</p>
                  <p className="text-base font-sm text-secondary">
                    {item.ayat} Ayat - {item.type}
                  </p>
                  <figure>
                    <figcaption>Putar Audio:</figcaption>
                    <audio controls src={item.audio}></audio>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
