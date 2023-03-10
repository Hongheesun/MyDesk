import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const BtnBox = styled.div`
  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    color: #000;
  }
`;

interface Props {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ControlDate = ({ nowDate, setNowDate }: Props) => {
  const changeYear = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setFullYear(date.getFullYear() + change);
    setNowDate(date);
  };

  const chagneMonth = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setMonth(date.getMonth() + change);
    setNowDate(date);
  };

  return (
    <Container>
      <BtnBox>
        <button onClick={() => changeYear(-1)}>{`<<`}</button>
        <button onClick={() => chagneMonth(-1)}>{`<`}</button>
      </BtnBox>
      <h1>{`${nowDate.getFullYear()}.${nowDate.getMonth() + 1}`}</h1>
      <BtnBox>
        <button onClick={() => chagneMonth(+1)}>{`>`}</button>
        <button onClick={() => changeYear(+1)}>{`>>`}</button>
      </BtnBox>
    </Container>
  );
};

export default ControlDate;
