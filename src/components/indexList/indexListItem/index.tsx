"use client";


import React,{useState} from "react";
import { Row, Col } from "react-bootstrap";

import { IndexCard, IndexDisabledCard } from "@/components/indexList/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {TokenChart} from "@/components/indexList/indexListItem/chart"
import {AccordianItem} from "@/components/indexList/indexListItem/accordianItem"

interface IndexInfoProps {
  title: string;
  tokens: {
    price: number;
    marketcap: number;
    name: string;
    image: string;
    isDisabled: boolean;
  }[];
}

export const IndexListItem = ({ title, tokens }: IndexInfoProps) => {
  const [selected, setSelected] = useState<string>("item-2");
  const [selectedTokenName, setSelectedTokenName] = useState<string>("");

  
  const onSelectCard = (value:string,name:string) => {
    if(selected === value){
      setSelected("item-2");
      setSelectedTokenName("");
      return;
    }

    setSelectedTokenName(name);
    setSelected(value);
  }

  return (
    <div className="my-10">
      <Row>
        <Col>
          <p className="text-3xl font-semibold text-white">{title}</p>
        </Col>
      </Row>
      <Row>
        {tokens.map((data, index) =>
          data.isDisabled ? (
            <Col key={index} className="mb-4">
              <IndexDisabledCard />
            </Col>
          ) : (
            <Col key={index} className="mb-4" onClick={()=>onSelectCard("item-1",data.name)}>
              <IndexCard
                image={`/${data.name.toLowerCase()}.png`}
                marketcap={data.marketcap}
                name={data.name}
                price={data.price}
              />
            </Col>
          )
        )}
      </Row>
      <Row>
        <Accordion type="single" collapsible className="w-full" value={selected} onValueChange={setSelected}>
          <AccordionItem value="item-1">
            <p className="text-2xl text-white text-center py-10">See more</p>
            <AccordionContent className="text-2xl text-white bg-[#171A20] py-10 px-5">
              <AccordianItem title={selectedTokenName}/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Row>
    </div>
  );
};
