import React, { useState, useEffect } from "react";
import * as Styled from "./Main.style";
import * as Img from "../../assets/images/index";
import Phone from "./Phone/Phone";
import EarPhones from "./EarPhones/EarPhones";
import { Paper } from "../../assets/sounds";
import { randomLifeQuotes } from "../../functions/lifeQuotes";
import Calendar from "../Calendar/Calendar";

function Main() {
  const [note, setNote] = useState<boolean>(false);
  const paperSound = new Audio(Paper);

  const openNote = () => {
    setNote(true);
    paperSound.play();
    paperSound.volume = 0.1;
  };
  const closeNote = () => {
    setNote(false);
  };

  return (
    <Styled.Container>
      <Styled.Desk>
        <Styled.Wrapper>
          {!note ? (
            <Styled.Note src={Img.NoteImg} onClick={openNote} />
          ) : (
            <Styled.NoteWrapper>
              <Calendar />
              <Styled.LifeQuotes>{randomLifeQuotes}</Styled.LifeQuotes>
              <Styled.OpenNote src={Img.OpenNote} onClick={closeNote} />
            </Styled.NoteWrapper>
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
