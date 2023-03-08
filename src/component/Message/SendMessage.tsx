import React, { useState } from "react";
import { auth, firebaseDB } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styled from "styled-components";

interface Iprops {
  // scroll: React.RefObject<React.UIEvent<HTMLElement, UIEvent>>;
  scroll: React.UIEvent<HTMLElement, UIEvent>;
}

const Form = styled.form`
  position: fixed;
  bottom: 20px;
  z-index: 2;
`;

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser!;

    await addDoc(collection(firebaseDB, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    // scroll.currentTarget &&
    //   scroll.currentTarget.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Form onSubmit={(event) => sendMessage(event)} className="send-message">
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </Form>
  );
};

export default SendMessage;
