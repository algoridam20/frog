// REF: https://www.beyondjava.net/how-to-connect-html-elements-with-an-arrow-using-svg

import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
`;

export const EdgeWrapper = styled.div`
  z-index: -1;
  align-content: center;
  content: "";
  position: absolute;
  height: 3px;
  margin-bottom: 5px;
  border: 3px solid ${(props) => props.color};
  width: ${(props) => props.length}px;
  transform: rotate(${(props) => props.degrees}deg);
  transform-origin: left;
`;

export const TextWrapper = styled.div`
  vertical-align: middle;
  font-weight: 600;
  z-index: 100;
  margin-right: 27%;
  line-height: 5px;
  text-align: right;
  font-size: 15px;
`;
