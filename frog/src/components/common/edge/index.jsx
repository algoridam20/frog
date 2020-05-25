import React from "react";
import {
  Wrapper,
  EdgeWrapper,
  TextWrapper,
  EdgeWrapper1,
  EdgeWrapperChild1,
  TextWrapper1,
  Loading,
  LoadingWrapper,
  // EdgeWrapper2,
  // EdgeWrapperChild2,
  // TextWrapper2,
} from "./styles";

export const EdgeByGridCoordinates = ({
  gridElementSize,
  fromRow,
  fromCol,
  toRow,
  toCol,
  isVisiting,
  isVisited,
  color = "red",
  isDirected = false,
  weight,
  styleOption = 0,
}) => {
  const delX = fromCol - toCol;
  const delY = fromRow - toRow;
  const angleCorrection = fromCol > toCol || fromCol === toCol ? 180 : 0;
  const degrees = Math.atan(delY / delX) * (180 / Math.PI) + angleCorrection;
  const length =
    Math.sqrt(delX * delX + delY * delY) * gridElementSize.replace("px", "");
  if (styleOption !== 0 && angleCorrection === 0) {
    return (
      <Wrapper row={fromRow} col={fromCol}>
        <EdgeWrapper1 length={length} degrees={degrees} color={color}>
          {(isVisited || !isVisiting) && (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          )}
          <EdgeWrapperChild1 color={color} />
          <TextWrapper1 color={color}>{`${weight ? weight : ""} ${
            isDirected ? ">" : ""
          }`}</TextWrapper1>
        </EdgeWrapper1>
      </Wrapper>
    );
  } else {
    return (
      <React.Fragment>
        <Wrapper row={fromRow} col={fromCol}>
          <EdgeWrapper degrees={degrees} length={length} color={color}>
            {(isVisited || !isVisiting) && (
              <LoadingWrapper>
                <Loading />
              </LoadingWrapper>
            )}
            <TextWrapper color={color}>{`${weight ? weight : ""} ${
              isDirected ? ">" : ""
            }`}</TextWrapper>
          </EdgeWrapper>
        </Wrapper>
      </React.Fragment>
    );
  }
};
