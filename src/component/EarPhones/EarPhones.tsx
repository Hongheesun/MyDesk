import React from "react";
import * as Styled from "./EarPhones.style";
import { EarphonesImg } from "../../assets/images";

function EarPhones() {
  return (
    <Styled.Container>
      <Styled.PlusButton>+</Styled.PlusButton>
      <Styled.MinusButton>-</Styled.MinusButton>
      <Styled.EearPhones src={EarphonesImg} />
    </Styled.Container>
  );
}

export default EarPhones;
