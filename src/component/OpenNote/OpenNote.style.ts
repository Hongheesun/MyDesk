import styled from "styled-components";
import { Memo, MaskingTape } from "../../assets/images";

export const NoteWrapper = styled.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  margin-top: 19vh;
`;

export const OpenNote = styled.img`
  height: 80vh;
  min-height: 500px;
  cursor: pointer;
`;

export const LifeQuotes = styled.div`
  position: absolute;
  top: 16%;
  left: 11%;
  width: 150px;
  height: 120px;
  padding-top: 47px;
  background-image: url(${Memo});
  background-size: contain;
  background-repeat: no-repeat;
  font-family: var(--font-note);
  text-align: center;
`;

export const NoteRightWrapper = styled.div`
  position: absolute;
  top: 8.5%;
  right: 14%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 67%;
`;

export const Inputs = styled.div`
  width: 29%;
  height: 20%;
`;

export const InputWrapper = styled.div`
  display: flex;
  &:nth-child(1) {
    margin-bottom: 2px;
  }
`;

export const Label = styled.div`
  width: 100%;
  background-image: url(${MaskingTape});
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 13px;
  font-family: var(--font-note);
  text-align: center;
`;

export const Input = styled.input`
  font-size: 12px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
