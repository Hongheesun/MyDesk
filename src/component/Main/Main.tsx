import React, { useState, useEffect } from "react";
import * as Styled from "./Main.style";
import * as Img from "../../assets/images/index";
import Phone from "./Phone/Phone";
import EarPhones from "./EarPhones/EarPhones";
import { Paper } from "../../assets/sounds";
import { randomLifeQuotes } from "../../functions/lifeQuotes";
import Calendar from "../Calendar/Calendar";
import {
  query,
  collection,
  getDocs,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

import firebaseDB from "../../firebase";

interface IContent {
  createdAt?: any;
  id?: string;
  feeling: string;
  text: string;
}

function Main() {
  const paperSound = new Audio(Paper);
  const [note, setNote] = useState<boolean>(false);
  const [reviews, setReviews] = useState<IContent[]>([]);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [feeling, setFeeling] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [content, setContent] = useState<IContent>({
    feeling: "",
    text: "",
  });

  const openNote = () => {
    setNote(true);
    paperSound.play();
    paperSound.volume = 0.3;
  };

  const closeNote = () => {
    setNote(false);
  };

  const inputReview = async () => {
    await addDoc(collection(firebaseDB, "reviews"), {
      feeling: feeling,
      text: text,
      createdAt: new Date(),
    });
    setFeeling("");
    setText("");
  };

  const openReviewContent = () => {
    setShowReview(true);
  };

  return (
    <Styled.Container>
      <Styled.Desk>
        <Styled.Wrapper>
          {!note ? (
            <Styled.Note src={Img.NoteImg} onClick={openNote} />
          ) : (
            <Styled.NoteWrapper>
              <Styled.NoteRightWrapper>
                <Calendar />
                <Styled.Inputs>
                  <Styled.InputWrapper>
                    <Styled.Label>Feeling</Styled.Label>
                    <Styled.Input
                      value={feeling}
                      required
                      onChange={(e) => setFeeling(e.target.value)}
                      placeholder="write today feeling..."
                    />
                  </Styled.InputWrapper>
                  <Styled.InputWrapper>
                    <Styled.Label>Review</Styled.Label>
                    <Styled.Input
                      value={text}
                      required
                      onChange={(e) => setText(e.target.value)}
                      placeholder="write today review..."
                    />
                  </Styled.InputWrapper>
                  <button type="submit" onClick={inputReview}>
                    저장
                  </button>
                </Styled.Inputs>
              </Styled.NoteRightWrapper>
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
