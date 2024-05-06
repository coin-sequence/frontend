import React from "react";
import {Indexes} from "@/contants";

import {IndexListItem} from "@/components/indexList/indexListItem";

export const IndexList = () => {
  return (
    <div>
      {Indexes.map((index, indexKey) => (
        <IndexListItem
          key={indexKey}
          title={index.title}
          tokens={index.tokens}
        />
      ))}
    </div>
  );
};

