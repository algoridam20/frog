import React from "react";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";
import { Header } from "../common/header";

export const DoNext = () => {
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
          <CardContainer title={"Do Next"}></CardContainer>
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
};
