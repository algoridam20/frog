import styled from "styled-components";

const maxSize = 6;
const getSize = (size) => {
  const sizeInPx = 30 + (size % maxSize) * 8;
  return `${sizeInPx}px`;
};

export const Circle = styled.div`
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  height: ${(props) => getSize(props.size)};
  width: ${(props) => getSize(props.size)};
  border: 3px solid ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const NameWrapper = styled.div`
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  line-height: ${(props) => getSize(props.size)};
`;
