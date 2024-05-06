import React from "react";

export const SwapFooter = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="text-[#C4C4C4]">Exchange Rate</p>
        <p className="text-[#C4C4C4]">1 USDC = 0.52324 BMX</p>
      </div>
      <div  className="flex justify-between">
        <p className="text-[#C4C4C4]">Est: Transaction Fee</p>
        <p className="text-[#C4C4C4]">0.00031333 ETH</p>
      </div>
    </div>
  );
};
