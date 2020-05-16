// REF: https://css-tricks.com/snippets/css/complete-guide-grid/
import React from "react";
import { CardContainer } from "../card";
import {
  GridChildWrapper,
  GridContainerWrapper,
  GridWrapper,
  Wrapper,
} from "./styles";
import { Node } from "../node";
import { EdgeByIds, EdgeByGridCoordinates } from "../edge";

export class GraphGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // EdgeByIds({ fromId: "Node-A", toId: "Node-B", color: "red" });
    // EdgeByIds({ fromId: "Node-A", toId: "Node-E", color: "blue" });
    // EdgeByIds({ fromId: "Node-E", toId: "Node-B", color: "blue" });
    // EdgeByIds({ fromId: "Node-C", toId: "Node-B", color: "cyan" });
    // EdgeByIds({ fromId: "Node-Z", toId: "Node-B", color: "red" });
    // EdgeByIds({ fromId: "Node-A", toId: "Node-Z", color: "green" });
    // EdgeByIds({ fromId: "Node-D", toId: "Node-C", color: "orange" });
    // EdgeByIds({ fromId: "Node-Z", toId: "Node-D", color: "blue" });
  }
  render() {
    const { row, col, editMode = false, elementSize = "90px" } = this.props;
    return (
      <Wrapper>
        <GridWrapper>
          <GridContainerWrapper row={row} col={col} elementSize={elementSize}>
            <GridChildWrapper colIndex={4 % col} rowIndex={3 % row}>
              <Node name={"A"} size={0} color={"red"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={2 % col} rowIndex={6 % row}>
              <Node name={"B"} size={1} color={"blue"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={9 % col} rowIndex={6 % row}>
              <Node name={"E"} size={2} color={"orange"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={4 % col} rowIndex={2 % row}>
              <Node name={"C"} size={3} color={"red"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={2 % col} rowIndex={4 % row}>
              <Node name={"D"} size={4} color={"cyan"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={1 % col} rowIndex={2 % row}>
              <Node name={"Z"} size={5} color={"green"} />
            </GridChildWrapper>
            <GridChildWrapper colIndex={7 % col} rowIndex={1 % row}>
              <Node name={"R"} size={0} color={"red"} />
            </GridChildWrapper>
            <EdgeByGridCoordinates
              gridElementSize={elementSize}
              fromRow={4}
              fromCol={2}
              toRow={3}
              toCol={4}
            />
            <EdgeByGridCoordinates
              gridElementSize={elementSize}
              fromRow={2}
              fromCol={1}
              toRow={3}
              toCol={4}
            />
            <EdgeByGridCoordinates
              gridElementSize={elementSize}
              fromRow={3}
              fromCol={4}
              toRow={2}
              toCol={1}
            />
            <EdgeByGridCoordinates
              gridElementSize={elementSize}
              fromRow={4}
              fromCol={2}
              toRow={3}
              toCol={4}
            />
          </GridContainerWrapper>
        </GridWrapper>
      </Wrapper>
    );
  }
}
// export const GraphGrid = ({
//   row,
//   col,
//   editMode = false,
//   elementSize = "90px",
// }) => {
//   return (
//     <Wrapper>
//       <GridWrapper>
//         {/* <CardContainer> */}
//         <GridContainerWrapper row={row} col={col} elementSize={elementSize}>
//           <GridChildWrapper colIndex={4 % col} rowIndex={3 % row}>
//             <Node name={"A"} size={0} color={"red"} />
//           </GridChildWrapper>
//           <GridChildWrapper colIndex={2 % col} rowIndex={6 % row}>
//             <Node name={"B"} size={1} color={"red"} />
//           </GridChildWrapper>
//           <GridChildWrapper colIndex={9 % col} rowIndex={6 % row}>
//             <Node name={"109"} size={2} color={"red"} />
//           </GridChildWrapper>
//           <GridChildWrapper colIndex={4 % col} rowIndex={2 % row}>
//             <Node name={"A"} size={3} color={"red"} />
//           </GridChildWrapper>
//           <GridChildWrapper colIndex={2 % col} rowIndex={4 % row}>
//             <Node name={"B"} size={4} color={"red"} />
//           </GridChildWrapper>
//           <GridChildWrapper colIndex={1 % col} rowIndex={2 % row}>
//             <Node name={"109"} size={5} color={"red"} />
//           </GridChildWrapper>
//           <EdgeByIds fromId={"Node-A"} toId={"Node-B"} />
//         </GridContainerWrapper>
//         {/* </CardContainer> */}
//       </GridWrapper>
//     </Wrapper>
//   );
// };
