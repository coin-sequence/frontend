import React from "react";
import { ArrowDownCircleIcon } from "lucide-react";

import { DepositCombobox } from "@/components/swap/depositCombobox";
import { CTFTokenCombobox } from "@/components/swap/CTFTokenCombobox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SwapFooter } from "@/components/swap/SwapFooter";

export const WithdrawSwap = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      {/* <div>
        <CTFTokenCombobox />
      </div>
      <div>
        <ArrowDownCircleIcon className="ml-2 h-8 w-8 shrink-0 opacity-50 text-white mx-auto" />
      </div> */}
      <div>
        <DepositCombobox />
      </div>
      <div>
        <Button className="w-full bg-[#30B7DFB0] text-2xl py-6 rounded-xl">
          Approve
        </Button>
      </div>
      <Separator className="bg-[#7F7F7F99] opacity-60" />
      <div>
        <SwapFooter />
      </div>
    </div>
  );
};
