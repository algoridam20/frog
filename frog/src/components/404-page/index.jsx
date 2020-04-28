import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";

export const PageNotFound = () => {
  return <Typography variant="h6">{dictionary.pageNotFound}</Typography>;
};
