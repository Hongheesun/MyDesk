import React, { useEffect, useRef, useState } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "../../firebase";
import Chat from "./Chat";
import SendMessage from "./SendMessage";
import styled from "styled-components";

interface IMessage {
  avatar?: string;
  name?: string;
  text?: string;
  uid?: string;
  createdAt?: Date;
  id: string;
}

const Container = styled.div`
  padding: 5%;
  padding-bottom: 10%;
`;

const ChatBox = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const scroll = useRef(null);

  useEffect(() => {
    const q = query(collection(firebaseDB, "messages"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: IMessage[] = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return unsubscribe;
  }, []);

  return (
    <Container>
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Chat key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
      {/* <span ref={scroll}></span> */}
      {/* <SendMessage scroll={scroll} /> */}
      <SendMessage />
    </Container>
  );
};

export default ChatBox;
