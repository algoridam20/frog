import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 3px rgb(202, 202, 202, 0.5);
  border: 1px solid rgb(148, 148, 148);
  display: ${(props) => (props.hide ? "none" : "block")};
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin: 0 0 8px 0;
  &:empty {
    display: none;
  }
`;
