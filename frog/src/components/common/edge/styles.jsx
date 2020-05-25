// REF: https://www.beyondjava.net/how-to-connect-html-elements-with-an-arrow-using-svg

import styled, { keyframes } from "styled-components";

const fill = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const Loading = styled.div`
  animation: ${fill} 2s linear 1;
  height: 100%;
  background-color: red;
`;

export const Wrapper = styled.div`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
`;

export const EdgeWrapper = styled.div`
  z-index: -1;
  content: "";
  position: absolute;
  height: 6px;
  border: 3px solid ${(props) => props.color};
  width: ${(props) => props.length}px;
  transform: rotate(${(props) => props.degrees}deg);
  transform-origin: left;
  background: white;
`;

export const TextWrapper = styled.div`
  position: absolute;
  font-weight: 700;
  margin-left: 65%;
  margin-top: 1px;
  margin-right: 27%;
  line-height: 2px;
  font-size: 15px;
  z-index: 3;
   color: white;
`;

export const EdgeWrapper1 = styled.div`
  z-index: -10;
  align-content: center;
  text-align: bottom;
  content: "";
  position: absolute;
  height: 40px;
  border-left: 3px solid ${(props) => props.color};
  border-right: 3px solid ${(props) => props.color};
  border-bottom: 3px solid ${(props) => props.color};
  border-radius: 10px;
  width: ${(props) => props.length}px;
  transform: rotate(${(props) => props.degrees}deg);
  transform-origin: 0px 5px;
  background: white;
`;

export const EdgeWrapperChild1 = styled.div`
  z-index: 2;
  position: absolute;
  margin-top: -1px;
  margin-bottom: 7px;
  margin-left: 5px;
  margin-right: 5px;
  content: "";
  height: 32px;
  border-radius: 7px;
  border-left: 3px solid ${(props) => props.color};
  border-right: 3px solid ${(props) => props.color};
  border-bottom: 3px solid ${(props) => props.color};
  width: calc(100% - 15px);
  transform: rotate(${(props) => props.degrees}deg);
  transform-origin: left;
  background: white;
`;

export const TextWrapper1 = styled.div`
  position: absolute;
  font-weight: 700;
  z-index: 100;
  margin-left: 65%;
  line-height: 73px;
  text-align: right;
  font-size: 15px;
  color: white;
`;

export const EdgeWrapper2 = styled.div``;

export const EdgeWrapperChild2 = styled.div``;

export const TextWrapper2 = styled.div``;
