import React from "react";
import { CardContainer } from ".";
import "../../../App.css";

export default {
  title: "CardContainer",
  component: CardContainer,
};

export const EmptyCard = () => <CardContainer />;

export const CardWithTitle = () => (
  <CardContainer title="Title goes here">Some content goes here</CardContainer>
);
