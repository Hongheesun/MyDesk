import React, { useEffect, useState } from "react";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";
import styled from "styled-components";
import axios from "axios";
import { Holiday } from "../../types/type";
import { Memo2 } from "../../assets/images";

const Container = styled.div`
  width: 123%;
  height: 80%;
  font-size: 13px;
  text-align: center;
  background-image: url(${Memo2});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Header = styled.div`
  font-family: var(--font-note);
  font-size: 20px;
  font-weight: 600;
`;

const CalendarWrapper = styled.div`
  width: 80%;
  transform: translate(37px, 30px);
`;

const requestData = {
  url: `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?`,
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  solYear: 2022,
  solMonth: 12,
};

const Calendar = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();
  const [holiday, setholiday] = useState<Holiday[]>([]);

  const getHoliday = async () => {
    const bodyData = {
      ...requestData,
      solYear: nowDate.getFullYear(),
      solMonth: nowDate.getMonth() + 1,
    };

    const response = await axios.get(
      `${bodyData.url}ServiceKey=${bodyData.serviceKey}&solYear=${bodyData.solYear}&solMonth=${bodyData.solMonth}`
    );

    const saveData = [].concat(response.data.response.body.items.item);
    setholiday(saveData);
  };

  useEffect(() => {
    getHoliday();
  }, [nowDate]);

  return (
    <Container>
      <Header>Calendar</Header>
      <CalendarWrapper>
        <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
        <DateBox
          nowDate={nowDate}
          setNowDate={setNowDate}
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
          holiday={holiday}
        />
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
