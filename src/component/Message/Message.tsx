import { useSetRecoilState } from "recoil";
import { openMessageAtom } from "../../atoms";
import { HiMinusSm } from "../../assets/icons/index";
import * as Styled from "./Message.style";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import ChatBox from "./ChatBox";

function MessageWrapper() {
  const setOpenMessage = useSetRecoilState(openMessageAtom);
  const [user] = useAuthState(auth);

  const closeMessageModal = () => {
    setOpenMessage(false);
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
