import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./Note.style";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDKGlrQWKVZm8OzSQBO8jQ3sAegfeooE8c",
  authDomain: "weathertogether-f0922.firebaseapp.com",
  projectId: "weathertogether-f0922",
  storageBucket: "weathertogether-f0922.appspot.com",
  messagingSenderId: "393268972611",
  appId: "1:393268972611:web:fdb5a919af69448cb718f6",
  measurementId: "G-E5X2NET7D3",
});

function Note() {
  const firestore = firebase.firestore();
  const dummy = useRef<HTMLDivElement>(null);
  const diaryRef = firestore.collection("diaries");
  // const query = diaryRef.orderBy("createdAt").limit(25);
  const query = diaryRef.orderBy("createdAt", "asc");
  const [diaries] = useCollectionData(query);
  const [feelingValue, setFeelingValue] = useState("");
  const [reivewValue, setReviewValue] = useState("");
  const [showReview, setShowReview] = useState<boolean>(false);
  const [content, setContent] = useState<string>();

  const inputReview = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    await diaryRef.add({
      feeling: feelingValue,
      text: reivewValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFeelingValue("");
    setReviewValue("");
    dummy.current && dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const openReviewContent = (id: number) => {
    setShowReview(true);
    console.log(diaries![id].text);
    setContent(diaries![id].text);
  };

  const closeReviewContent = () => {
    setShowReview(false);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Reviews>
          {diaries &&
            diaries.map((d, id) => (
              <Styled.Review
                key={id}
                onClick={() => {
                  openReviewContent(id);
                }}
              />
            ))}
          <span ref={dummy}></span>
        </Styled.Reviews>
        <button
          className="diaryBtn"
          type="button"
          // onClick={() => setIsModalOpen(true)}
        >
          추가
        </button>
        {/* <Modal
          inputDiaries={inputDiaries}
          setFeelingValue={setFeelingValue}
          feelingValue={feelingValue}
          diaryValue={diaryValue}
          setDiaryValue={setDiaryValue}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></Modal> */}
      </Styled.Wrapper>
      {showReview && (
        <Styled.ReviewContent>
          <Styled.CloseButton onClick={closeReviewContent}>
            X
          </Styled.CloseButton>
          <div>{content}</div>
        </Styled.ReviewContent>
      )}
    </Styled.Container>
  );
}

export default Note;
