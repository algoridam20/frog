// TODO: re-render header on path change
import React from "react";
import dictionary from "../../dictionary.json";
import { Wrapper } from "./styles";
import { Typography } from "@material-ui/core";

export const PageNotFound = () => {
  return (
    <Wrapper>
      <Typography variant="h6">{dictionary.pageNotFound}</Typography>
    </Wrapper>
  );
};
