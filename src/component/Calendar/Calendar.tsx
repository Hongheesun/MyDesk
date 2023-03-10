import React, { useEffect, useState } from "react";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";
import styled from "styled-components";
import axios from "axios";
import { Holiday } from "../../types/type";
import { Memo2 } from "../../assets/images";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding: 4%;
  font-size: 13px;
  text-align: center;
  background-image: url(${Memo2});
  background-size: contain;
  background-repeat: no-repeat;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
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
      {/* <Header>Calendar</Header> */}
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
