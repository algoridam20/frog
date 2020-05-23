import React from "react";
import dictionary from "../../dictionary.json";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";
import { Header } from "../common/header";

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        {" "}
        <Typography variant="h5">{dictionary.workInProgress}</Typography>{" "}
        <Link to={"/graph-visualizer"}>{"until then navigate here"}</Link>{" "}
        <Link to={"/knowledge-graph/graph1"}>{"or here"}</Link>
        <Link to={"/do-next"}>{"or here"}</Link>
      </Wrapper>
    </React.Fragment>
  );
};
