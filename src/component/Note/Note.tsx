import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./Note.style";
import {
  query,
  collection,
  getDocs,
  orderBy,
  onSnapshot,
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
  useEffect(() => {
    const q = query(collection(firebaseDB, "reviews"), orderBy("createdAt"));
    onSnapshot(q, (snapshot: any) => {
      console.log(snapshot.docs);
      const nweetArr = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(nweetArr);
    });
  }, []);
  // const [diaries] = useCollectionData(query);
  // const [feelingValue, setFeelingValue] = useState("");
  // const [reivewValue, setReviewValue] = useState("");
  const [showReview, setShowReview] = useState<boolean>(false);
  const [content, setContent] = useState<string>();

  // const inputReview = async (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   await diaryRef.add({
  //     feeling: feelingValue,
  //     text: reivewValue,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setFeelingValue("");
  //   setReviewValue("");
  //   dummy.current && dummy.current.scrollIntoView({ behavior: "smooth" });
  // };

  const openReviewContent = (id: number) => {
    setShowReview(true);
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
                  openReviewContent(id);
                }}
              />
            ))}
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
