import { useSetRecoilState } from "recoil";
import { openMessageAtom } from "../../atoms";
import { HiMinusSm } from "../../assets/icons/index";
import * as Styled from "./Message.style";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";

function MessageWrapper() {
  const setOpenMessage = useSetRecoilState(openMessageAtom);
  const [user] = useAuthState(auth);

  const closeMessageModal = () => {
    setOpenMessage(false);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <HiMinusSm onClick={closeMessageModal} />
      </Styled.Header>
      {!user ? <Welcome /> : <ChatBox />}
    </Styled.Container>
  );
}

export default MessageWrapper;
