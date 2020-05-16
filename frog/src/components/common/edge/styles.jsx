// REF: https://www.beyondjava.net/how-to-connect-html-elements-with-an-arrow-using-svg

import styled from "styled-components";


export const Wrapper = styled.div`
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  :after {
    content: "";
    position: absolute;
    border-top: 1px solid red;
    width: ${(props) => props.length}px;
    transform: rotate(${(props) => props.degrees}deg);
    transform-origin: 0% 0%;
  }
`;
