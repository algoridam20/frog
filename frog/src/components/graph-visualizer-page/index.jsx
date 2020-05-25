import React from "react";
import { connect } from "react-redux";
import dictionary from "../../dictionary.json";
import { ToolBarWrapper, ContentWrapper, Wrapper } from "./styles";
import { CardContainer } from "../common/card";
import { Header } from "../common/header";
import { GraphGrid } from "../common/graph-grid";
import { graph1 } from "../../state/sample-graphs";

// export const GraphVisualizer = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Wrapper>
//         <ToolBarWrapper>
//           <CardContainer title={"Toolbar"}>
//             {dictionary.workInProgress}
//           </CardContainer>
//         </ToolBarWrapper>
//         <ContentWrapper>
//           <CardContainer title={"Graph"}>
//             <GraphGrid totalRow={8} totalCol={13} graph={graph1} />
//           </CardContainer>
//         </ContentWrapper>
//       </Wrapper>
//     </React.Fragment>
//   );
// };

class GraphVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  render() {
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
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchOrderDetails(orderId) {
  //   dispatch();
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
