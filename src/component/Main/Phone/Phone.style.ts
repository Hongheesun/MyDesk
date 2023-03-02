import styled from "styled-components";
import { randomImage } from "../../../functions/background";
import * as Img from "../../../assets/images/index";

export const PhoneWrapper = styled.div`
  position: relative;
  left: 20%;
  bottom: 12%;
  height: 60vh;
  min-height: 280px;
  background-image: url(${Img.PhoneImg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PhoneItems = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 67%;
  margin-top: 14%;
  margin-left: 12%;
  background-image: url(${randomImage});
  background-size: cover;
  opacity: 0.9;
`;

export const DateTime = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 1.2;
  margin-top: 15%;
`;

export const Date = styled.div`
  font-size: 13px;
`;

export const Time = styled.div`
  font-family: var(--font-time);
  font-size: 32px;
`;

export const Widget = styled.div`
  width: 100%;
  margin-top: 7%;
`;

export const Player = styled.div`
  width: 90%;
  height: 65%;
  background-color: rgba(255, 255, 255, 0.75);
  padding-top: 12%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

export const Message = styled(Player)`
  height: 70%;
  margin-top: 7%;
  color: #b93434;

  &:hover {
    animation: wobble-horizontal 1s infinite;
  }

  @keyframes wobble-horizontal {
    16.65% {
      transform: translateX(8px);
    }

    33.3% {
      transform: translateX(-6px);
    }

    49.95% {
      transform: translateX(4px);
    }

    66.6% {
      transform: translateX(-2px);
    }

    83.25% {
      transform: translateX(1px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
