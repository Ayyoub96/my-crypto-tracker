import ExchangesCard from "@/Components/ExchangesCard";
import HoldingCard from "@/Components/holdingCard";

const StatsPage = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className="mr-4">
        <ExchangesCard />
      </div>
      <div className="ml-4">
        <HoldingCard currency="bitcoin" />
      </div>
    </div>
    <HoldingCard currency="ethereum" />
    </>
  );
};

export default StatsPage;
