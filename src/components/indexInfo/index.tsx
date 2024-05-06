import React from "react";
import { Col, Row, Container } from "react-bootstrap";
export const IndexInfo = () => {
  return (
    <div className=" gap-10 flex flex-col my-24">
      <Row>
        <Col>
          <p className="text-5xl text-white text-center">Indexes</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} className="flex justify-center items-center gap-2">
          <p className="text-2xl text-[#0CC0DF]">$10,439,232</p>
          <p className="text-2xl text-white">TVL</p>
        </Col>
        <Col sm={12} md={4} className="flex justify-center items-center gap-2">
          <p className="text-2xl text-[#0CC0DF]">332,434</p>
          <p className="text-2xl text-white">Holders</p>
        </Col>
        <Col sm={12} md={4} className="flex justify-center items-center gap-2">
          <span className="flex gap-2 items-center">
         <p className="text-2xl text-[#0CC0DF]">↑ 234%</p>
          </span>
          <p className="text-2xl text-white"> 24H</p>
        </Col>
      </Row>
      <Row className="border-1 border-[#0CC0DF80] w-11/12 mx-auto" />
    </div>
  );
};
