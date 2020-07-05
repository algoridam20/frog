import React from "react";
import { connect } from "react-redux";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";
import { Header } from "../common/header";
import { GraphGrid } from "../common/graph-grid";
import { graph1 } from "../../state/sample-graphs";
import {
  runGraphAlgoRequest,
  setGraphRequest,
} from "../../state/actions/graph-visualizer-actions";

class GraphVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const graph2 = graph1;
    this.props.setGraph(graph2);
    this.props.runGraphAlgoRequest({ algo: "dfs" });
  }

  render() {
    const { graph } = this.props;
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
              <GraphGrid totalRow={8} totalCol={13} graph={graph} />
            </CardContainer>
          </ContentWrapper>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  algorithm: state.algorithm,
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  runGraphAlgoRequest(algo) {
    dispatch(runGraphAlgoRequest(algo));
  },
  setGraph(graph) {
    dispatch(setGraphRequest(graph));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
