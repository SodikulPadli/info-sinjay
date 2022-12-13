import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wilayah() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://ojk-invest-api.vercel.app/api/illegals');
      setData(response.data.data.illegals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="mt-5">
        <div className="w-full px-4 mt-5">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary"> Daftar Investasi Ilegal</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">OJK Keluarkan Data Investasi Bodong / Ilegal</h2>
          </div>
        </div>
        <div className=" w-full flex flex-wrap  ">
          <div className="mx-auto text-center ">
            <table className="border-separate border-spacing-2 border border-slate-400">
              {data.map((item) => (
                <>
                  <thead>
                    <tr>
                      <th className="px-2">Nama</th>

                      <th className="px-2">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>

                      <td>{item.type} </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
