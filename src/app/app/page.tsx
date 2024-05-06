import React from "react";
import { Container } from "react-bootstrap";

import { IndexInfo } from "@/components/indexInfo";
import { IndexList } from "@/components/indexList";
import {Footer} from "@/components/footer";

function AppPage() {
  return (
    <div className="container">
      <IndexInfo />
      <IndexList />
    </div>
  );
}

export default AppPage;
