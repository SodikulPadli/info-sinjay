import Berita1 from "../img/berita1.jpg"
import Navbar from "../components/Navbar";

export default function HomePage() {
  const title = ' Berita';
  document.title = 'Info Sinjay | ' + title;
  return (
    <>
      <Navbar title={title} />
      <div className="pt-32 md:mx-10 ">
        <div className="px-5 pb-3 border-b border-sky-800">
          <h2 className="font-bold text-2xl">INFO TERKINI <span className="text-teal-400">#Sindang Jaya</span> </h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="px-5 py-5">
            <img src={Berita1} />
          </div> 
          <div className="px-5 py-5 text-justify">
            <h3 className="font-bold pb-5 text-lg">Jalan Rusak, Emak-Emak Sindang Jaya Demo minta diperbaiki</h3>
            <p>Sejumlah warga di Desa Sindang Jaya, Kecamatan Sindang Jaya, Kabupaten Tangerang, melakukan demonstrasi meminta pemerintah setempat untuk memperbaiki akses jalan kawasan permukiman penduduk yang rusak berat Dalam demonstrasi tersebut, warga pun melakukan aksi dengan menanam pohon pisang dan menutup akses jalan yang rusak tersebut.</p>
          </div>
        </div>
      </div>
    </>
  );
}
