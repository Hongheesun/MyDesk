import React, { useState, useEffect } from "react";
import * as Styled from "./Main.style";
import * as Img from "../../assets/images/index";
import Phone from "./Phone/Phone";

function Main() {
  return (
    <Styled.Container>
      <Styled.Desk>
        <Styled.Wrapper>
          <Styled.Note src={Img.NoteImg} />
          <Styled.Pencil src={Img.PencilImg} />
        </Styled.Wrapper>
        <Styled.RightWrapper>
          <Styled.EearPhones src={Img.EarphonesImg} />
          <Phone />
        </Styled.RightWrapper>
      </Styled.Desk>
    </Styled.Container>
  );
}

export default Main;
