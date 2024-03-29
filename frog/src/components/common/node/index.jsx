// REF: https://css-tricks.com/snippets/css/complete-guide-grid/
import React from "react";
import { Circle, NameWrapper } from "./styles";

export const Node = ({ name, size, color, isVisited }) => {
  return (
    <Circle size={size} color={color} isVisited={isVisited} id={`Node-${name}`}>
      <NameWrapper size={size}>{name}</NameWrapper>
    </Circle>
  );
};
