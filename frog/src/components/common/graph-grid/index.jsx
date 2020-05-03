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

export const GraphGrid = ({
  row,
  col,
  editMode = false,
  elementSize = "90px",
}) => {
  return (
    <Wrapper>
      <GridWrapper>
        {/* <CardContainer> */}
        <GridContainerWrapper row={row} col={col} elementSize={elementSize}>
          <GridChildWrapper colIndex={4 % col} rowIndex={3 % row}>
            <Node name={"A"} size={0} color={"red"} />
          </GridChildWrapper>
          <GridChildWrapper colIndex={2 % col} rowIndex={6 % row}>
            <Node name={"B"} size={1} color={"red"} />
          </GridChildWrapper>
          <GridChildWrapper colIndex={9 % col} rowIndex={6 % row}>
            <Node name={"109"} size={2} color={"red"} />
          </GridChildWrapper>
          <GridChildWrapper colIndex={4 % col} rowIndex={2 % row}>
            <Node name={"A"} size={3} color={"red"} />
          </GridChildWrapper>
          <GridChildWrapper colIndex={2 % col} rowIndex={4 % row}>
            <Node name={"B"} size={4} color={"red"} />
          </GridChildWrapper>
          <GridChildWrapper colIndex={1 % col} rowIndex={2 % row}>
            <Node name={"109"} size={5} color={"red"} />
          </GridChildWrapper>
        </GridContainerWrapper>
        {/* </CardContainer> */}
      </GridWrapper>
    </Wrapper>
  );
};
