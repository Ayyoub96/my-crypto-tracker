
import React, { useEffect, useState } from 'react';

const CoinMarketPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&price_change_percentage=1h%2C24h%2C7d&locale=en');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   
  
    <table className="mx-auto mt-4">
      <thead className="border-t border-white border-opacity-20">
        <tr>
          <th className="bg-custom-orange px-10 py-2">#</th>
          <th className="text-custom-orange px-10 py-2 ">Name</th>
          <th className="text-custom-orange px-10 py-2 pr-16">Price</th>
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
              {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
            </td>
            <td className={`text-${coin.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'}-500 px-10 py-4`}>
              {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
            </td>
            <td className={`text-${coin.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red'}-500 px-10 py-4`}>
              {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
            </td>
            <td className="px-10 py-4">${coin.market_cap}</td>
            <td className="px-10 py-4">${coin.total_volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

export default CoinMarketPage;






