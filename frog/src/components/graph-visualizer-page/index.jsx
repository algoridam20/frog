import React from "react";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";
import { Header } from "../common/header";
import { GraphGrid } from "../common/graph-grid";

export const GraphVisualizer = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <ToolBarWrapper>
          <CardContainer title={"Toolbar"}>
            {dictionary.workInProgress}
          </CardContainer>
        </ToolBarWrapper>
        <ContentWrapper>
          <CardContainer title={"Graph"}>
            <GraphGrid row={8} col={13} />
          </CardContainer>
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};
