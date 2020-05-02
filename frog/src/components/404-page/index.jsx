import React from "react";
import dictionary from "../../dictionary.json";
import { Wrapper } from "./styles";
import { Typography } from "@material-ui/core";
import { Header } from "../common/header";

export const PageNotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Typography variant="h6">{dictionary.pageNotFound}</Typography>
      </Wrapper>
    </React.Fragment>
  );
};
