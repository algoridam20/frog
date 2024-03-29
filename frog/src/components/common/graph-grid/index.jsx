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
import { EdgeByGridCoordinates } from "../edge";
import { getRowColById, getRowById, getColById } from "../../../utils/common";

export const GraphGrid = ({
  totalRow,
  totalCol,
  editMode = false,
  elementSize = "90px",
  graph,
}) => {
  if (!graph.properties) {
    return <div />;
  }
  const { isDirected, isWeighted } = graph.properties;
  return (
    <Wrapper>
      <GridWrapper>
        <GridContainerWrapper
          row={totalRow}
          col={totalCol}
          elementSize={elementSize}
        >
          {graph.adjacencyList.map((val) => {
            const { id, name, size, color, isVisiting, isVisited } = val.node;
            const { row, col } = getRowColById(id, totalRow, totalCol);
            const Edges = val.edges.map((edge) => {
              const { toId, weight, styleOption, isVisiting, isVisited } = edge;
              const toRow = getRowById(toId, totalRow, totalCol).row;
              const toCol = getColById(toId, totalRow, totalCol).col;
              return (
                <EdgeByGridCoordinates
                  key={`E-${id}->${toId}`}
                  gridElementSize={elementSize}
                  isDirected={isDirected}
                  weight={isWeighted ? weight : undefined}
                  fromRow={row}
                  fromCol={col}
                  toRow={toRow}
                  toCol={toCol}
                  styleOption={styleOption}
                  isVisiting={isVisiting}
                  isVisited={isVisited}
                />
              );
            });
            return (
              <React.Fragment>
                <GridChildWrapper colIndex={col} rowIndex={row} key={id}>
                  <Node
                    name={name}
                    size={size}
                    color={color}
                    isVisiting={isVisiting}
                    isVisited={isVisited}
                  />
                </GridChildWrapper>
                {Edges}
              </React.Fragment>
            );
          })}
        </GridContainerWrapper>
      </GridWrapper>
    </Wrapper>
  );
};
