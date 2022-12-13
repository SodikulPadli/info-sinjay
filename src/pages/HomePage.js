import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=62b64518b4d548a193b591832eb4e86e');
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="mt-5">
        <div className="w-full px-4">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Top Berita Nasional</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Berita Terbaru</h2>
          </div>
        </div>
        {news.map((data) => (
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center ">
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow rounded-md shadow-md">
                  <img src={data.urlToImage} alt="gambar" width="w-full" />
                  <div className="p-3">
                    <h3 className="mt-5 mb-5 text-xl font-semibold text-dark">{data.title}</h3>
                    <p className="text-base font-medium text-secondary">{data.description}</p>
                    <p className="text-base font-sm text-secondary"> Sumber : {data.author}</p>
                    <a href="#" className="text-base font-sm text-sky-500">
                      {' '}
                      Baca Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
