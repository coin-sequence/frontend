import React from "react";
import { ChartData } from "chart.js";

import { Card, CardContent } from "@/components/ui/card";
import {LineChart} from "@/components/indexList/indexListItem/chart/lineChart";

const lineChartData: ChartData<"line"> = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "My First Dataset",
      data: [12, 19, 3, 5, 2, 3, 9],
      backgroundColor: "#7CCB4C",
      borderColor: "#7CCB4C",
      fill:true
    },
  ],
};

export const TokenChart = () => {
  return (
    <Card className="rounded-3xl bg-[#31343B] border-[1px] border-[#474747]">
      <CardContent className="flex flex-col py-3">
        <LineChart lineChartData={lineChartData}/>
      </CardContent>
    </Card>
  );
};
