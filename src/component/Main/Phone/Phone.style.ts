import styled from "styled-components";
import { randomImage } from "../../../functions/background";

export const PhoneWrapper = styled.div`
  position: relative;
  left: 20%;
  bottom: 5%;
  height: 50vh;
`;

export const Phone = styled.img`
  height: 50vh;
  min-height: 280px;
`;

export const WallPaper = styled.div`
  position: absolute;
  width: 41%;
  height: 67%;
  min-width: 107px;
  min-height: 188px;
  margin-top: 12%;
  margin-left: 10.5%;
  border-radius: 2px;
  background-image: url(${randomImage});
  background-size: cover;
  opacity: 0.9;
`;

export const DateTime = styled.div`
  position: absolute;
  z-index: 1;
  width: 41%;
  height: 67%;
  margin-top: 17%;
  margin-left: 10%;
  color: #fff;
  text-align: center;
  line-height: 1.2;
`;

export const Date = styled.div`
  font-size: 12px;
`;

export const Time = styled.div`
  font-family: var(--font-time);
  font-size: 34px;
`;
