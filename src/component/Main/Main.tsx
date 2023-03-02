import React, { useState, useEffect } from "react";
import * as Styled from "./Main.style";
import * as Img from "../../assets/images/index";
import Phone from "./Phone/Phone";
import EarPhones from "./EarPhones/EarPhones";

function Main() {
  return (
    <Styled.Container>
      <Styled.Desk>
        <Styled.Wrapper>
          <Styled.Note src={Img.NoteImg} />
          <Styled.Pencil src={Img.PencilImg} />
        </Styled.Wrapper>
        <Styled.RightWrapper>
          <EarPhones />
          <Phone />
        </Styled.RightWrapper>
      </Styled.Desk>
    </Styled.Container>
  );
}

export default Main;
