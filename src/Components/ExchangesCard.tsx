import { useEffect, useState } from 'react';

const ExchangesCard = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
        const data = await response.json();
        setExchanges(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-4  h-screen">
      <div className="bg-gray-900 rounded p-8 max-h-[70%]  overflow-y-auto">
        <h2 className="text-center text-custom-orange text-xl font-bold mb-4">Exchanges</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Trade Volume 24h </th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exchange) => (
              <tr  className='border-t border-grey' key={exchange.id}>
                <td className="py-2">
                  <div className="flex items-center">
                  
                    <span className='mr-2'>{exchange.trust_score_rank}</span>                  
                    <img src={exchange.image} alt={exchange.name} className="w-6 h-6 mr-2" />
                    <span>{exchange.name}</span>
                  </div>
                </td>
                <td className="py-2 text-custom-orange">{exchange.trade_volume_24h_btc?.toFixed(2) ?? '-'}  BTC</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangesCard;