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
  bottom: 4%;
  z-index: 2;
  width: 318px;
`;

const Input = styled.input`
  width: 75%;
  height: 30px;
  padding: 3px;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: white;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 37px;
  padding: 10px;
  border: none;
  background-color: var(--main-green);
  color: #fff;
  cursor: pointer;
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
      <Input
        type="text"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default SendMessage;
