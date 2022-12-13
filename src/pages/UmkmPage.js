import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function UmkmPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
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
      <div className="mt-5">
        <div className="w-full px-4">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary"> Kasus Covid 19 indonesia</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Update Kasus Covid 19 </h2>
          </div>
        </div>
        <div className=" w-full flex flex-wrap  ">
          <div className="mx-auto text-center ">
            <table className="border-separate border-spacing-2 border border-slate-400">
              {data.map((item) => (
                <>
                  <thead>
                    <tr>
                      <th className="px-2">Provinsi</th>
                      <th className="px-2">Kasus</th>
                      <th className="px-2">Dirawat</th>
                      <th className="px-2">Sembuh</th>
                      <th className="px-2">Meninggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.provinsi}</td>
                      <td>{item.kasus} </td>
                      <td>{item.dirawat} </td>
                      <td>{item.sembuh} </td>
                      <td>{item.meninggal} </td>
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
