import React, { useState, useEffect, useMemo } from "react";
import * as Styled from "./Phone.style";
import * as Date from "../../../functions/date";
import { useRecoilValue, useRecoilState } from "recoil";
import { musicAtom, messageAtom } from "../../../atoms";
import Message from "../../Message/Message";

function Phone() {
  const [time, setTime] = useState<string>("00:00");
  const [date, setDate] = useState<string>("");
  const [musicState, setMusicState] = useState<boolean>(false);
  const music = useRecoilValue(musicAtom);
  const [message, setMessage] = useRecoilState(messageAtom);

  useEffect(() => {
    setTime(Date.currentTimer());
    setDate(Date.currentDate());
  }, []);

  const startTimer = () => {
    setInterval(Date.currentTimer, 60000);
  };

  startTimer();

  const startMusic = () => {
    music.play();
    music.loop = true;
    setMusicState(true);
  };

  const stopMusic = () => {
    music.pause();
    music.loop = false;
    setMusicState(false);
  };

  const openMessageModal = () => {
    setMessage(true);
  };

  return (
    <Styled.PhoneWrapper>
      <Styled.PhoneItems>
        <Styled.DateTime>
          <Styled.Date>{date}</Styled.Date>
          <Styled.Time>{time}</Styled.Time>
        </Styled.DateTime>
        <Styled.Widget>
          {!musicState ? (
            <Styled.Player onClick={startMusic}>▶</Styled.Player>
          ) : (
            <Styled.Player onClick={stopMusic}>■</Styled.Player>
          )}
          <Styled.Message onClick={openMessageModal}>
            New Message
          </Styled.Message>
        </Styled.Widget>
      </Styled.PhoneItems>
      {message && <Message />}
    </Styled.PhoneWrapper>
  );
}

export default Phone;
