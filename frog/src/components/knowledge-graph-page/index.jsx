import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";
import { Wrapper } from "./styles";
import { Header } from "../common/header";

export const KnowledgeGraph = ({ match }) => {
  const {
    params: { graphId },
  } = match;
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Typography variant="h5">
          Graph # {graphId} {dictionary.workInProgress}
        </Typography>
      </Wrapper>
    </React.Fragment>
  );
};
