import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import {TokenChart} from "@/components/indexList/indexListItem/chart/index"

interface AccordianItemProps {
  title: string;
}


export const AccordianItem = ({title}:AccordianItemProps) => {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-white font-bold text-4xl">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[#4BC9F7] font-semibold text-4xl">$2.27</p>
            <p className="text-[#4BC9F7] font-semibold text-3xl self-end">USD</p>
            <p className="text-[#80CB9B] font-semibold text-lg">
              +0.68 (14.70%)
            </p>
          </div>
          <Select defaultValue="1D">
            <SelectTrigger className="w-[100px] bg-transparent border-none focus:ring-0">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1D">1D</SelectItem>
              <SelectItem value="1W">1W</SelectItem>
              <SelectItem value="1M">1M</SelectItem>
            </SelectContent>
          </Select>
        </Col>
        <Col md={6} className="flex gap-2 justify-end">
          <Button
            variant="default"
            className="bg-[#4BC9F7] w-[130px] ring-1 ring-inset ring-[#30B7DF80]"
          >
            Buy
          </Button>
          <Button
            variant="default"
            className="bg-[#525761] w-[130px] ring-1 ring-inset ring-[#30B7DF80]"
          >
            Sell
          </Button>
        </Col>
      </Row>

      <Row className="my-5 flex flex-col lg:flex-row gap-4 lg:justify-between lg:gap-0">
        <Col xs={12} lg={5}>
          <TokenChart />
        </Col>
        <Col xs={12} lg={5} className="">
          <Card className="bg-transparent border-[1px] pt-4 border-[#474747]">
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="font-bold text-white text-3xl">Price</p>
                <p className="font-bold text-white text-3xl text-right">$2.27</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-white text-xl">24H %</p>
                <p className="font-normal text-white text-xl text-right">14.70%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-white text-xl">Market Cap</p>
                <p className="font-normal text-white text-xl text-right">$23.27M</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-white text-xl">Volume</p>
                <p className="font-normal text-white text-xl text-right">$20.80K</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-white text-xl">Current Supply</p>
                <p className="font-normal text-white text-xl text-right">323,424.423</p>
              </div>
              <div>
                <p className="font-normal text-white text-xl">Token Address</p>
                <p className="bg-[#2F333A] truncate py-4 rounded-lg px-2 text-white text-xl text-wrap">Cvu2dBCLyMzuw88jfrUtLQ7LJ82LYC6WyQJLA3GmYFJM</p>
              </div>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AccordianItem;
