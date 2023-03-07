import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { TfiPencil } from "react-icons/tfi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

interface IContent {
  createdAt?: any;
  id?: string;
  feeling: string;
  text: string;
}

function Note() {
  const [reviews, setReviews] = useState<IContent[]>([]);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [feeling, setFeeling] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [content, setContent] = useState<IContent>({
    feeling: "",
    text: "",
  });

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
    setContent(() => ({
      ["feeling"]: reviews[id].feeling,
      ["text"]: reviews[id].text,
    }));
  };

  const closeReviewContent = () => {
    setShowReview(false);
  };

  return (
    <Styled.Container>
      <Styled.HomeButton>
        <Link to="/">
          <FaHome />
        </Link>
      </Styled.HomeButton>

      <Styled.Wrapper>
        <Styled.Reviews>
          {reviews &&
            reviews.map((review, id) => (
              <Styled.Review
                key={id}
                onClick={() => {
                  openReviewContent();
                  showDetailContent(id);
                }}
              >
                {review.createdAt.toDate().toISOString().split("T", 1)}
              </Styled.Review>
            ))}
        </Styled.Reviews>
        {showReview && (
          <Styled.ReviewContentWrapper>
            <Styled.CloseButton onClick={closeReviewContent}>
              <RiCloseCircleLine />
            </Styled.CloseButton>
            {content.feeling && (
              <Styled.ReviewContent>
                <div>기분 : {content.feeling}</div>
                <div>회고 : {content.text}</div>
              </Styled.ReviewContent>
            )}
            {!content.feeling && (
              <div>
                <div className="diaryInputdiv">
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
          </Styled.ReviewContentWrapper>
        )}
      </Styled.Wrapper>
      <Styled.AddButton>
        <TfiPencil
          onClick={() => {
            openReviewContent();
            setContent(() => ({
              ["feeling"]: "",
              ["text"]: "",
            }));
          }}
        />
      </Styled.AddButton>
    </Styled.Container>
  );
}

export default Note;
