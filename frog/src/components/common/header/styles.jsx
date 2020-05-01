import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px 16px 8px 16px;
`;

export const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 16px 0;
  &:empty {
    display: none;
  }
`;
