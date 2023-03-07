import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { dateAtom, reviewAtom } from "../../atoms";
import * as Styled from "./OpenNote.style";
import {
  query,
  collection,
  getDocs,
  orderBy,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import * as Img from "../../assets/images/index";
import firebaseDB from "../../firebase";
import { TfiPencil } from "react-icons/tfi";
import Calendar from "../Calendar/Calendar";
import { randomLifeQuotes } from "../../functions/lifeQuotes";
import { calendarDate } from "../../functions/date";
import { Paris } from "../../assets/videos";

interface IContent {
  createdAt?: string;
  id?: string;
  feeling: string;
  text: string;
}

function OpenNote() {
  const date = useRecoilValue(dateAtom);
  const [openReview, setOpenReview] = useRecoilState(reviewAtom);
  const [note, setNote] = useState<boolean>(false);
  const [review, setReview] = useState<IContent>();
  const [showReview, setShowReview] = useState<boolean>(false);
  const [content, setContent] = useState<IContent>({
    feeling: "",
    text: "",
    createdAt: "",
  });
  const closeNote = () => {
    setNote(false);
  };

  const getData = () => {
    const q = query(
      collection(firebaseDB, "reviews"),
      where("createdAt", "==", date)
    );
    onSnapshot(q, (snapshot: any) => {
      const nweetArr = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReview(nweetArr[0]);
      const day = new Date();
      const [weekname, month, oneDay, year, ...rest] = String(day).split(" ");
      setContent((prev) => ({
        ...prev,
        ["createdAt"]: year + "-" + calendarDate(month) + "-" + oneDay,
      }));
    });
  };

  useEffect(() => {
    getData();
  }, [date]);

  useEffect(() => {
    getData();
  }, []);

  const inputReview = async () => {
    await addDoc(collection(firebaseDB, "reviews"), {
      feeling: content.feeling,
      text: content.text,
      createdAt: content.createdAt,
    });
    setContent(() => ({
      ["feeling"]: "",
      ["text"]: "",
      ["createdAt"]: "",
    }));
  };

  return (
    <Styled.NoteWrapper>
      <Styled.NoteRightWrapper>
        <Calendar />
        {openReview ? (
          <div>
            {review && (
              <div>
                <div>기분 : {review.feeling}</div>
                <div>회고 : {review.text}</div>
              </div>
            )}
          </div>
        ) : (
          <Styled.Inputs>
            <Styled.InputWrapper>
              <Styled.Label>Feeling</Styled.Label>
              <Styled.Input
                value={content.feeling}
                required
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    ["feeling"]: e.target.value,
                  }))
                }
                placeholder="write today feeling..."
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.Label>Review</Styled.Label>
              <Styled.Input
                value={content.text}
                required
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    ["text"]: e.target.value,
                  }))
                }
                placeholder="write today review..."
              />
            </Styled.InputWrapper>
            <button type="submit" onClick={inputReview}>
              저장
            </button>
          </Styled.Inputs>
        )}
        <TfiPencil
          onClick={() => {
            setOpenReview(false);
          }}
        />
      </Styled.NoteRightWrapper>
      <Styled.Video src={Paris} loop autoPlay muted />
      <Styled.LifeQuotes>{randomLifeQuotes}</Styled.LifeQuotes>
      <Styled.OpenNote src={Img.OpenNote} onClick={closeNote} />
    </Styled.NoteWrapper>
  );
}

export default OpenNote;
