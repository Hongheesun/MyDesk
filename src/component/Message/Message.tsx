import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { messageAtom } from "../../atoms";
import { HiMinusSm } from "../../assets/icons/index";
import * as Styled from "./Message.style";

import { auth, firebaseDB } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";
import ChatBox from "./ChatBox";

function MessageWrapper() {
  const setMessage = useSetRecoilState(messageAtom);
  const [user] = useAuthState(auth);

  const closeMessageModal = () => {
    setMessage(false);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <HiMinusSm onClick={closeMessageModal} />
      </Styled.Header>
      {!user ? <button onClick={googleSignIn}>hi</button> : <ChatBox />}
    </Styled.Container>
  );
}

export default MessageWrapper;
