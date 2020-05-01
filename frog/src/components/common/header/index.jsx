// REF: switch js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

import React from "react";
import dictionary from "../../../dictionary.json";
import { CardContainer } from "../card";
import { Wrapper } from "./styles";

export const Header = () => {
  const pathName = window.location.pathname;
  let title = "";

  if (pathName.includes("/graph-visualizer")) {
    title = dictionary.titleGraphVisualizer;
  } else if (pathName.includes("/knowledge-graph")) {
    title = dictionary.titleKnowledgeGraph;
  } else {
    title = dictionary.titleApp;
  }

  console.log(title, "..........");

  return (
    <Wrapper>
      <CardContainer title={title}></CardContainer>
    </Wrapper>
  );
};
