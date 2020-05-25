import React from "react";
import { connect } from "react-redux";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";
import { Header } from "../common/header";
import { GraphGrid } from "../common/graph-grid";
import { graph1 } from "../../state/sample-graphs";
import { runGraphAlgoRequest } from "../../state/actions/graph-visualizer-actions";

class GraphVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.runGraphAlgoRequest("dfs");
  }

  render() {
    const { isRunning, algo, error } = this.props.algorithm;
    console.log(isRunning, algo, error, ".....");
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
              <GraphGrid totalRow={8} totalCol={13} graph={graph1} />
            </CardContainer>
          </ContentWrapper>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  algorithm: state.algorithm,
});

const mapDispatchToProps = (dispatch) => ({
  runGraphAlgoRequest(algo) {
    dispatch(runGraphAlgoRequest(algo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
