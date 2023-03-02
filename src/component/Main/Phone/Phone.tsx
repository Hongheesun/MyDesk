import React, { useState, useEffect } from "react";
import * as Styled from "./Phone.style";
import * as Img from "../../../assets/images/index";
import * as Date from "../../../functions/date";

function Phone() {
  const [time, setTime] = useState<string>("00:00");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setTime(Date.currentTimer());
    setDate(Date.currentDate());
  }, []);

  const startTimer = () => {
    setInterval(Date.currentTimer, 60000);
  };

  startTimer();

  return (
    <Styled.PhoneWrapper>
      <Styled.DateTime>
        <Styled.Date>{date}</Styled.Date>
        <Styled.Time>{time}</Styled.Time>
      </Styled.DateTime>
      <Styled.WallPaper />
      <Styled.Phone src={Img.PhoneImg} />
    </Styled.PhoneWrapper>
  );
}

export default Phone;
