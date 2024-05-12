import React from "react";
import Marquee from "react-fast-marquee";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { BotIcon, TwitterIcon, Book } from "lucide-react";

import { marqueeElements } from "@/contants";

import { MarqueeElement } from "@/components/footer/marqueeElement";

export const Footer = () => {
  return (
    <div className="mt-auto">
      <Marquee className="text-white text-2xl">
        {marqueeElements.map((marqueeElement, marqueeElementKey) => {
          return (
            <MarqueeElement
              key={marqueeElementKey}
              image={`/${marqueeElement.title.toLowerCase()}.png`}
              change1={marqueeElement.change1}
              change2={marqueeElement.change2}
              changeType={marqueeElement.changeType}
              price={marqueeElement.price}
              title={marqueeElement.title}
            />
          );
        })}
      </Marquee>

      <Container>
        <Row className="flex flex-row items-center">
          <Col>
            <MountainIcon className="h-36 w-36 flex mt-8" />
          </Col>
          <Col lg={2} className="flex gap-3 self-end pb-5">
            <BotIcon size={32} color="#ffffff" />
            <TwitterIcon size={32} color="#ffffff" fill="#ffffff" />
            <Book size={32} color="#ffffff" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function MountainIcon(props: any) {
  return (
    <div {...props}>
      <Image
        src="/brandLogo1.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="Brand Logo"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </div>
  );
}
