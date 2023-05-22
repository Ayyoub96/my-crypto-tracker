import { useState, useEffect, useRef } from 'react';

const ExchangesCard = () => {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const modalRef = useRef();

  const handleExchangeClick = (exchange) => {
    setSelectedExchange(exchange);
  };

  const closeModal = () => {
    setSelectedExchange(null);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

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

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
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
              <tr
                className="border-t border-grey cursor-pointer"
                key={exchange.id}
                onClick={() => handleExchangeClick(exchange)}
              >
                <td className="py-2">
                  <div className="flex items-center">
                    <span className="mr-2">{exchange.trust_score_rank}</span>
                    <img src={exchange.image} alt={exchange.name} className="w-6 h-6 mr-2" />
                    <span>{exchange.name}</span>
                  </div>
                </td>
                <td className="py-2 text-custom-orange">{exchange.trade_volume_24h_btc?.toFixed(2) ?? '-'} BTC</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedExchange && (
  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-50">
    <div ref={modalRef} className="relative bg-gray-900 rounded p-8 w-1/2 h-1/2 overflow-y-auto">
    <span
  className="absolute top-4 right-4 font-bold border-2 border-custom-orange text-custom-purple py-1 px-2 rounded-md z-2 cursor-pointer transition duration-200 hover:bg-custom-orange hover:text-custom-white"
  onClick={closeModal}
>
  X
</span>

      
      <div className=" flex items-center justify-center">
                    <img src={selectedExchange.image} alt={selectedExchange.name} className="w-6 h-6 mr-2 mb-4" />
                    <span className="text-center text-custom-orange text-xl font-bold mb-4">{selectedExchange.name}</span>
                  </div>

      <p className='mb-4'>Year established: {selectedExchange.year_established}</p>
      <p className='mb-4'>Trade Volume 24h: {selectedExchange.trade_volume_24h_btc?.toFixed(4) ?? '-'} BTC</p>
      <p className='mb-4'>Trust Score Rank: {selectedExchange.trust_score_rank}</p>
      <p className='mb-4'>View Exchange: <a className='text-custom-orange' href={selectedExchange.url} target="_blank" rel="noopener noreferrer">{selectedExchange.name}</a></p>
      <p className='text-sm'>{selectedExchange.description}</p>
    </div>
  </div>
)}

    </div>
  );
};

export default ExchangesCard;

