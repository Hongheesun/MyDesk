import React from "react";
import styled, { css } from "styled-components";
import { useSetRecoilState, useRecoilState } from "recoil";
import { dateAtom, reviewAtom } from "./../../atoms";
import { calendarDate } from "../../functions/date";

interface ContainerProps {
  sameMonth: boolean;
  sameDay: boolean;
  clickDay: boolean;
  isHoliday: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 6px;
    color: ${({ sameMonth }) => (sameMonth ? "black" : `lightgray`)};
    ${({ sameDay }) =>
      sameDay
        ? css`
            color: #fff;
            background-color: #8f9a8d;
            border-radius: 5px;
          `
        : css``}
    ${({ clickDay }) =>
      clickDay
        ? css`
            border: 1px solid #8f9a8d;
            border-radius: 5px;
          `
        : css``}
    ${({ isHoliday }) => {
      if (isHoliday) {
        return css`
          color: red;
        `;
      }
    }}

    &:hover {
     border: 1px solid #8f9a8d;
     padding: 5px;
     border-radius: 5px;
  }
  }
`;

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isHoliday: boolean;
}

const AllDay = ({
  day,
  nowDate,
  setNowDate,
  clickedDate,
  setClickedDate,
  isHoliday,
}: Props) => {
  const setDateState = useSetRecoilState(dateAtom);
  const [openReview, setOpenReview] = useRecoilState(reviewAtom);
  const nowTime = new Date();

  const sameMonth = nowDate.getMonth() === day.getMonth();
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  const clickDay: boolean = clickedDate
    ? clickedDate.getFullYear() === day.getFullYear() &&
      clickedDate.getMonth() === day.getMonth() &&
      clickedDate.getDate() === day.getDate()
    : false;

  const clickDate = () => {
    setClickedDate(day);
    const [weekname, month, oneDay, year, ...rest] = String(day).split(" ");
    setDateState(year + "-" + calendarDate(month) + "-" + oneDay);
    setOpenReview(true);
  };

  return (
    <Container
      onClick={() => clickDate()}
      sameMonth={sameMonth}
      sameDay={sameDay}
      clickDay={clickDay}
      isHoliday={isHoliday}
    >
      <p>{day.getDate()}</p>
    </Container>
  );
};

export default AllDay;
