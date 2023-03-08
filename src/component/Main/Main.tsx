import React, { useState } from "react";
import * as Styled from "./Main.style";
import * as Img from "../../assets/images/index";
import Phone from "./Phone/Phone";
import EarPhones from "./EarPhones/EarPhones";
import { Paper } from "../../assets/sounds";
import OpenNote from "../OpenNote/OpenNote";
import { useRecoilState } from "recoil";
import { noteAtom } from "../../atoms";

function Main() {
  const paperSound = new Audio(Paper);
  const [note, setNote] = useRecoilState(noteAtom);

  const openNote = () => {
    setNote(true);
    paperSound.play();
    paperSound.volume = 0.3;
  };

  return (
    <Styled.Container>
      <Styled.Desk>
        <Styled.Wrapper>
          {!note ? (
            <Styled.Note src={Img.NoteImg} onClick={openNote} />
          ) : (
            <OpenNote />
          )}
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
