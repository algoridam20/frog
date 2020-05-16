import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 200px;
  width: 100%;
  text-align: center;
`;

export const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    Array.from(Array(props.col).keys())
      .map(() => props.elementSize)
      .toString()
      .split(",")
      .join(" ")};
  grid-template-rows: ${(props) =>
    Array.from(Array(props.row).keys())
      .map(() => props.elementSize)
      .toString()
      .split(",")
      .join(" ")}};
  align-items: center;
  justify-items: center;
`;

export const GridChildWrapper = styled.div`
  grid-row: ${(props) => props.rowIndex};
  grid-column: ${(props) => props.colIndex};
`;
