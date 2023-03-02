import styled from "styled-components";
import { randomImage } from "../../../functions/background";

export const PhoneWrapper = styled.div`
  height: 50vh;
  position: relative;
  margin-top: 50vh;
`;

export const Phone = styled.img`
  height: 50vh;
  min-height: 280px;
`;

export const WallPaper = styled.div`
  position: absolute;
  width: 70%;
  height: 67%;
  margin-top: 20%;
  margin-left: 18%;
  border-radius: 2px;
  background-image: url(${randomImage});
  background-size: cover;
  opacity: 0.9;
`;

export const DateTime = styled.div`
  position: absolute;
  z-index: 1;
  width: 70%;
  height: 67%;
  margin-top: 30%;
  margin-left: 18%;
  color: #fff;
  text-align: center;
  line-height: 1.2;
`;

export const Date = styled.div`
  font-size: 14px;
`;

export const Time = styled.div`
  font-family: var(--font-time);
  font-size: 38px;
`;
