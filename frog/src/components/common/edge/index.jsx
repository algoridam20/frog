import React from "react";
import { Wrapper, EdgeWrapper, TextWrapper } from "./styles";

export const EdgeByGridCoordinates = ({
  gridElementSize,
  fromRow,
  fromCol,
  toRow,
  toCol,
  color = "red",
  isDirected = false,
  weight,
}) => {
  const delX = fromCol - toCol;
  const delY = fromRow - toRow;
  const angleCorrection = fromCol > toCol || fromCol === toCol ? 180 : 0;
  console.log(angleCorrection);
  const degrees = Math.atan(delY / delX) * (180 / Math.PI) + angleCorrection;
  const length =
    Math.sqrt(delX * delX + delY * delY) * gridElementSize.replace("px", "");

  return (
    <Wrapper row={fromRow} col={fromCol}>
      <EdgeWrapper
        row={fromRow}
        col={fromCol}
        degrees={degrees}
        length={length}
        color={color}
      >
        <TextWrapper color={color}>{`${weight ? weight : ""} ${
          isDirected ? ">" : ""
        }`}</TextWrapper>
      </EdgeWrapper>
    </Wrapper>
  );
};
