import React from "react";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";

export const GraphVisualizer = () => {
  return (
    <Wrapper>
      <ToolBarWrapper>
        <CardContainer title={"Toolbar"}>
          {dictionary.workInProgress}
        </CardContainer>
      </ToolBarWrapper>
      <ContentWrapper>
        <CardContainer title={"Graph"}>
          {dictionary.workInProgress}
        </CardContainer>
      </ContentWrapper>
    </Wrapper>
  );
};
