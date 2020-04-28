import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";

export const KnowledgeGraph = ({ match }) => {
  const {
    params: { graphId },
  } = match;
  return (
    <Typography variant="h5">
     Graph # {graphId} {dictionary.workInProgress}
    </Typography>
  );
};
