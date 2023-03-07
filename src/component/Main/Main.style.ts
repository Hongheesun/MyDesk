import styled from "styled-components";
import { Memo, MaskingTape } from "../../assets/images";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #8f9a8d;
  overflow: hidden;
`;

export const Desk = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Note = styled.img`
  height: 88vh;
  min-height: 500px;
  margin-top: 15vh;
  cursor: pointer;
`;

export const Pencil = styled.img`
  height: 40vh;
  margin-top: 30vh;
  min-height: 241px;
`;

export const RightWrapper = styled.div`
  position: relative;
  height: 130vh;
  display: flex;
  flex-direction: column;
`;

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
