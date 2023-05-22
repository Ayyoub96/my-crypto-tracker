import ExchangesCard from "@/Components/ExchangesCard";
import HoldingCard from "@/Components/holdingCard";
import NftCard from "@/Components/NftsCard";

const StatsPage = () => {
  return (
<>
  <div className="grid grid-cols-2 mx-6 gap-4 ">
    <div>
      <ExchangesCard />
    </div>
    <div>
      <HoldingCard currency="bitcoin" />
    </div>
    <div className="col-span-2 -mt-40">
      <NftCard />
    </div>
  </div>
</>




  );
};

export default StatsPage;
