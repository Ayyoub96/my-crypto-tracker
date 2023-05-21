

import React, { useState, useEffect } from 'react';

const CoinMarketPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&price_change_percentage=1h%2C24h%2C7d&locale=en`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <svg
            className="animate-spin h-16 w-16 text-custom-orange"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM20 12a8 8 0 01-8 8v-4a4 4 0 004-4h4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 1.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
      <table className="mx-auto mt-4">
      <thead className="border-t border-white border-opacity-20">
        <tr>
          <th className="bg-custom-orange px-10 py-2">#</th>
          <th className="text-custom-orange px-10 py-2 "><span className="pr-30">Name</span>
</th>
          <th className="text-custom-orange px-10 py-2 "><span className="pr-30">Name</span></th>
          <th className="text-orange-500 px-10 py-2">1h %</th>
          <th className="text-orange-500 px-10 py-2">24h %</th>
          <th className="text-orange-500 px-10 py-2">7d %</th>
          <th className="text-orange-500 px-10 py-2">Market Cap</th>
          <th className="text-orange-500 px-10 py-2">Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={coin.id} className="border-t border-grey">
            <td className="px-10 py-4">{coin.market_cap_rank}</td>
            <td className="px-10 py-4">{coin.name}</td>
            <td>${coin.current_price}</td>
            <td className={`px-10 py-4 ${
                coin.price_change_percentage_24h_in_currency >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
              {coin.price_change_percentage_1h_in_currency?.toFixed(2) ?? '-'}%
            </td>
            <td className={`text-${coin.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'}-500 px-10 py-4`}>
            {coin.price_change_percentage_24h_in_currency?.toFixed(2) ?? '-'}%
            </td>
            <td className={`text-${coin.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red'}-500 px-10 py-4`}>
            {coin.price_change_percentage_7d_in_currency?.toFixed(2) ?? '-'}%
            </td>
            <td className="px-10 py-4">${coin.market_cap}</td>
            <td className="px-10 py-4">${coin.total_volume}</td>
          </tr>
        ))}
      </tbody>
      </table>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-custom-orange  text-white rounded-md mr-2"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-custom-orange text-white rounded-md px-8"
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinMarketPage;







