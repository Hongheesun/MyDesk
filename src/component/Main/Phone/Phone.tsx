import React, { useState, useEffect, useMemo } from "react";
import * as Styled from "./Phone.style";
import * as Date from "../../../functions/date";
import { useRecoilValue } from "recoil";
import { musicAtom } from "../../../atoms";

function Phone() {
  const [time, setTime] = useState<string>("00:00");
  const [date, setDate] = useState<string>("");
  const [musicState, setMusicState] = useState<boolean>(false);
  const music = useRecoilValue(musicAtom);

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
    setMusicState(true);
  };

  const stopMusic = () => {
    music.pause();
    setMusicState(false);
  };

  return (
    <Styled.PhoneWrapper>
      <Styled.PhoneItems>
        <Styled.DateTime>
          <Styled.Date>{date}</Styled.Date>
          <Styled.Time>{time}</Styled.Time>
        </Styled.DateTime>
        <Styled.Widget>
          {/* <audio ref={myRef} src={Music} /> */}
          {!musicState ? (
            <Styled.Player onClick={startMusic}>▶</Styled.Player>
          ) : (
            <Styled.Player onClick={stopMusic}>■</Styled.Player>
          )}
          <Styled.Message>New Message</Styled.Message>
        </Styled.Widget>
      </Styled.PhoneItems>
    </Styled.PhoneWrapper>
  );
}

export default Phone;
