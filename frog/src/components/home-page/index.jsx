import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

export const HomePage = () => {
  return (
    <Wrapper>
      {" "}
      <Typography variant="h5">{dictionary.workInProgress}</Typography>{" "}
      <Link to={"/graph-visualizer"}>{"until then navigate here"}</Link>{" "}
      <Link to={"/knowledge-graph/graph1"}>{"or here"}</Link>
    </Wrapper>
  );
};
