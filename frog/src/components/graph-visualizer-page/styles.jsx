// REF: flex-box https://css-tricks.com/snippets/css/a-guide-to-flexbox/

import styled from "styled-components";

export const ToolBarWrapper = styled.div`
  flex-grow: 1;
  order: 1;
  min-width:: 20%;
`;

export const ContentWrapper = styled.div`
  flex-grow: 4;
  order: 2;
  min-width: 80%;
  margin-left: 8px;
  min-height: 200px;
`;

export const Wrapper = styled.div`
  margin: 8px 16px;
  display: flex;
  flex-direction: row;
`;
