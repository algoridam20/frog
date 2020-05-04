import React from "react";
import { getPositionById } from "../../../utils/find-position-by-id";
import { EdgeWrapper } from "./styles";

export const EdgeByIds = ({
  fromId,
  toId,
  color,
  isDirected = false,
  weight = 0,
}) => {
  //   return "";
  const fromNode = getPositionById(fromId);
  const toNode = getPositionById(toId);
  console.log(fromNode, toNode, ".........");
  drawCurvedLine(fromNode.x, fromNode.y, toNode.x, toNode.y, color, 0.0);
  return "";
};
const drawCurvedLine = (x1, y1, x2, y2, color, tension) => {
  let svg = createSVG();
  let shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let delta = (x2 - x1) * tension;
  let hx1 = x1 + delta;
  let hy1 = y1;
  let hx2 = x2 - delta;
  let hy2 = y2;
  let path =
    "M " +
    x1 +
    " " +
    y1 +
    " C " +
    hx1 +
    " " +
    hy1 +
    " " +
    hx2 +
    " " +
    hy2 +
    " " +
    x2 +
    " " +
    y2;
  shape.setAttributeNS(null, "d", path);
  shape.setAttributeNS(null, "fill", "none");
  shape.setAttributeNS(null, "stroke", color);
  svg.appendChild(shape);
};

const createSVG = () => {
  let svg = document.getElementById("svg-canvas");
  if (null == svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "svg-canvas");
    svg.setAttribute("style", "position:absolute;top:0px;left:0px");
    svg.setAttribute("width", document.body.clientWidth);
    svg.setAttribute("height", document.body.clientHeight);
    svg.setAttribute("z-index", "-1");
    svg.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );
    document.body.appendChild(svg);
  }
  return svg;
};
