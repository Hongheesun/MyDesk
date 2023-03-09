import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import * as Icon from "../../assets/icons";

const Container = styled.div`
  text-align: center;
  padding-top: 13%;
`;

const Info = styled.div`
  font-size: 20px;
  margin-bottom: 8%;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 10px;
  margin: 0 auto;
  border: 3px solid var(--main-green);
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    box-shadow: inset 1px 1px 3px #1e1e1e;
  }

  & svg {
    font-size: 20px;
  }
`;

const Text = styled.span`
  margin-left: 5%;
  font-weight: 600;
  color: #000;
`;

function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <Container>
      <Info>Please log in to chat!</Info>
      <LoginButton onClick={googleSignIn}>
        <Icon.FcGoogle />
        <Text>Google Login</Text>
      </LoginButton>
    </Container>
  );
}

export default Welcome;
