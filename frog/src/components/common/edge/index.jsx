import React from "react";
import { getPositionById } from "../../../utils/find-position-by-id";
import { Wrapper } from "./styles";

export const EdgeByGridCoordinates = ({
  gridElementSize,
  fromRow,
  fromCol,
  toRow,
  toCol,
  color,
  isDirected = false,
  weight = 0,
}) => {
  const delX = fromCol - toCol;
  const delY = fromRow - toRow;
  // ye logic sahi kar de 👀
  const angleCorrection =
    (fromRow < toRow && fromCol > toCol) ||
    (fromRow === toRow && fromCol > toCol)
      ? 180
      : 0;
  console.log(angleCorrection);
  const degrees = Math.atan(delY / delX) * (180 / Math.PI) + angleCorrection;
  const length =
    Math.sqrt(delX * delX + delY * delY) * gridElementSize.replace("px", "");

  return (
    <Wrapper row={fromRow} col={fromCol} degrees={degrees} length={length} />
  );
};
