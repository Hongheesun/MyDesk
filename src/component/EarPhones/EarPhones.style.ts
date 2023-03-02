import styled from "styled-components";

export const Container = styled.div``;

export const EearPhones = styled.img`
  position: relative;
  top: -15vh;
  height: 55vh;
  min-height: 290px;
`;

export const PlusButton = styled.div`
  position: relative;
  top: 24%;
  left: 73%;
  z-index: 1;
  color: #7d7d7d;
  font-size: 12px;
  cursor: pointer;
`;

export const MinusButton = styled(PlusButton)`
  top: 10%;
  left: 82.5%;
`;
