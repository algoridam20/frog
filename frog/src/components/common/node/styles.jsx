import styled from "styled-components";

const maxSize = 6;
const getSize = (size) => {
  const sizeInPx = 30 + (size % maxSize) * 8;
  return `${sizeInPx}px`;
};

export const Circle = styled.div`
  z-index: 10;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  height: ${(props) => getSize(props.size)};
  width: ${(props) => getSize(props.size)};
  border: 3px solid ${(props) => props.color};
  background-color: white;
  z-index: 99;
  color: ${(props) => props.color};
  box-shadow: 0px 2px 3px rgb(202, 202, 202, 0.5);
`;

export const NameWrapper = styled.div`
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  z-index: 100;
  line-height: ${(props) => getSize(props.size)};
`;
