import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../App.css";
import styled from "styled-components";

interface IMessage {
  avatar?: string;
  name?: string;
  text?: string;
  uid?: string;
  createdAt?: Date;
  id: string;
}

interface Iprops {
  message: IMessage;
}

interface IStyleProps {
  uid: string;
}

const Container = styled.div<IStyleProps>`
  display: flex;
  width: max-content;
  max-width: calc(100% - 50px);
  margin-left: ${(props) => props.uid === "user" && "auto"};
  margin-bottom: 20px;
  padding: 13px;
  border-radius: ${(props) =>
    props.uid === "user" ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  background-color: ${(props) => (props.uid === "user" ? "#c4d9db" : "fff")};
  color: #1c2c4c;
  box-shadow: -1px 1px 1px 1px #929292;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Chat = ({ message }: Iprops) => {
  const [user] = useAuthState(auth);
  return (
    <Container uid={message.uid === user?.uid ? "user" : "other"}>
      <Profile
        className="chat-bubble__left"
        src={message?.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message?.name}</p>
        <p className="user-message">{message?.text}</p>
      </div>
    </Container>
  );
};

export default Chat;
