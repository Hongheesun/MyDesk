import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./Note.style";
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
  createdAt: any;
  feeling: string;
  id: string;
  text: string;
}

function Note() {
  const [reviews, setReviews] = useState<IContent[]>([]);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [feeling, setFeeling] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const q = query(collection(firebaseDB, "reviews"), orderBy("createdAt"));
    onSnapshot(q, (snapshot: any) => {
      const nweetArr = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(nweetArr);
    });
  }, []);

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

  const showDetailContent = (id: number) => {
    setContent(reviews[id].text);
  };

  const closeReviewContent = () => {
    setShowReview(false);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Reviews>
          {reviews &&
            reviews.map((d, id) => (
              <Styled.Review
                key={id}
                onClick={() => {
                  openReviewContent();
                  showDetailContent(id);
                }}
              />
            ))}
        </Styled.Reviews>
        <button
          className="diaryBtn"
          type="button"
          onClick={() => {
            openReviewContent();
            setContent("");
          }}
        >
          추가
        </button>
      </Styled.Wrapper>
      {showReview && (
        <Styled.ReviewContent>
          <Styled.CloseButton onClick={closeReviewContent}>
            X
          </Styled.CloseButton>
          {content && <div>{content}</div>}
          {!content && (
            <div>
              <div className="diaryInput">
                <input
                  value={feeling}
                  required
                  onChange={(e) => setFeeling(e.target.value)}
                  placeholder="오늘의 기분을 입력해주세요"
                />
                <input
                  value={text}
                  required
                  onChange={(e) => setText(e.target.value)}
                  placeholder="일기를 입력해주세요"
                />
              </div>

              <button type="submit" onClick={inputReview}>
                저장
              </button>
            </div>
          )}
        </Styled.ReviewContent>
      )}
    </Styled.Container>
  );
}

export default Note;
