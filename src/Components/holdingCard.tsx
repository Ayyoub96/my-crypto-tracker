import { useEffect, useState } from 'react';

const HoldingCard = ({currency }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/companies/public_treasury/'+currency);
        const data = await response.json();
        setCompanies(data.companies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<div className=" h-screen mt-4">
<div className="bg-gray-900 rounded p-8 max-h-[70%]  overflow-y-auto">
  <h2 className="text-center text-custom-orange text-xl font-bold mb-4">Top Companies Holding {currency == "bitcoin" ? "BTC" : "ETH" }</h2>
  <table className="w-full" >
    <thead>
      <tr>
        <th className="text-left">Company</th>
        <th className="text-left">ToTal Holding  </th>
      </tr>
    </thead>
    <tbody>
      {companies.map((company,index) => (
        <tr  className='border-t border-grey' key={company.id}>
          <td className="py-2">
            <div className="flex items-center">
            
                            
              <span className="mr-2">{index + 1}</span>
             <span>{company.name}</span>
            </div>
          </td>
          <td className="py-2 text-custom-orange">{company.total_holdings}  {currency == "bitcoin" ? "BTC" : "ETH" } </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  );
};

export default HoldingCard;
