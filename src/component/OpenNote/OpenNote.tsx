import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { dateAtom, reviewAtom, noteAtom } from "../../atoms";
import * as Styled from "./OpenNote.style";
import {
  query,
  collection,
  where,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import * as Img from "../../assets/images/index";
import { firebaseDB, auth } from "../../firebase";
import Calendar from "../Calendar/Calendar";
import { randomLifeQuotes } from "../../functions/lifeQuotes";
import { calendarDate } from "../../functions/date";
import { Paris } from "../../assets/videos";
import * as Icon from "../../assets/icons/index";
import { useAuthState } from "react-firebase-hooks/auth";

interface IContent {
  createdAt?: string;
  id?: string;
  feeling: string;
  text: string;
}

function OpenNote() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const date = useRecoilValue(dateAtom);
  const [user] = useAuthState(auth);
  const [openReview, setOpenReview] = useRecoilState(reviewAtom);
  const [note, setNote] = useRecoilState(noteAtom);
  const [review, setReview] = useState<IContent>();
  const [content, setContent] = useState<IContent>({
    feeling: "",
    text: "",
    createdAt: "",
  });

  const closeNote = () => {
    setNote(false);
  };

  const writeReview = () => {
    setOpenReview(false);
  };

  const handleResizeHeight = () => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "100px";
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
    if (content.text !== "" && content.feeling !== "") {
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
    }
  };

  const deleteReview = async () => {
    await deleteDoc(doc(firebaseDB, "reviews", `${review?.id}`));
  };

  return (
    <Styled.NoteWrapper>
      <Styled.NoteRightWrapper>
        <Calendar />
        <Styled.Wrapper>
          {openReview ? (
            <>
              {review && (
                <>
                  <Styled.Inputs>
                    <Styled.InputWrapper>
                      <Styled.Label>Feeling</Styled.Label>
                      <Styled.Text> {review.feeling}</Styled.Text>
                    </Styled.InputWrapper>
                    <Styled.InputWrapper>
                      <Styled.Label>Reivew</Styled.Label>
                      <Styled.Text> {review.text}</Styled.Text>
                    </Styled.InputWrapper>
                  </Styled.Inputs>
                  {user?.uid && (
                    <Styled.Button>
                      <Icon.MdOutlineDeleteForever onClick={deleteReview} />
                      <Icon.TfiPencil />
                      <Icon.HiMinusSm onClick={writeReview} />
                    </Styled.Button>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {user?.uid && (
                <>
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
                        maxLength={13}
                      />
                    </Styled.InputWrapper>
                    <Styled.InputWrapper>
                      <Styled.Label>Review</Styled.Label>
                      <Styled.Input
                        ref={ref}
                        value={content.text}
                        required
                        maxLength={90}
                        rows={4}
                        onInput={handleResizeHeight}
                        onChange={(e) =>
                          setContent((prev) => ({
                            ...prev,
                            ["text"]: e.target.value,
                          }))
                        }
                        placeholder="write today review..."
                      />
                    </Styled.InputWrapper>
                  </Styled.Inputs>
                  <Styled.Button onClick={inputReview}>
                    <Icon.RiAddCircleFill />
                  </Styled.Button>
                </>
              )}
            </>
          )}
        </Styled.Wrapper>
      </Styled.NoteRightWrapper>
      <Styled.Video src={Paris} loop autoPlay muted />
      <Styled.LifeQuotes>{randomLifeQuotes}</Styled.LifeQuotes>
      <Styled.OpenNote src={Img.OpenNote} onClick={closeNote} />
    </Styled.NoteWrapper>
  );
}

export default OpenNote;
