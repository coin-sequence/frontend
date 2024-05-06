import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DepositSwap } from "@/components/swap/depositSwap";
import { WithdrawSwap } from "@/components/swap/withdrawSwap";

export function SwapCard() {
  return (
    <div className="p-10 rounded-2xl border-1 border-[#B2B2B280] bg-[#73737359] backdrop-blur-sm w-fit mx-auto">
      <Tabs defaultValue="deposit" className="max-w-[400px] mx-auto">
        <TabsList className="grid w-full grid-cols-2 bg-transparent">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit">
          <Card className=" bg-transparent">
            <CardContent className="space-y-2">
              <DepositSwap />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="withdraw">
          <Card className=" bg-transparent">
            <CardContent className="space-y-2">
              <WithdrawSwap />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
