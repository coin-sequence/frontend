import React from "react";
import { Row, Col } from "react-bootstrap";

import { IndexCard, IndexDisabledCard } from "@/components/indexList/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <Col key={index} className="mb-4">
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
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl text-white">See more</AccordionTrigger>
            <AccordionContent className="text-2xl text-white">
              Chart details go here
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Row>
    </div>
  );
};
