import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";
import { Wrapper } from "./styles";

export const KnowledgeGraph = ({ match }) => {
  const {
    params: { graphId },
  } = match;
  return (
    <Wrapper>
      <Typography variant="h5">
        Graph # {graphId} {dictionary.workInProgress}
      </Typography>
    </Wrapper>
  );
};
