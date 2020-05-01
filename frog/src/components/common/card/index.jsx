import React from "react";
import { Container, Title } from "./styles";

export const CardContainer = ({ title, children, hide }) => (
  <Container hide={hide}>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);
