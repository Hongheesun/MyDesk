import styled from "styled-components";
import { Memo, Memo3, MaskingTape } from "../../assets/images";

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

export const Video = styled.video`
  position: absolute;
  top: 46%;
  left: 14%;
  width: 30%;
  height: 31%;
  object-fit: cover;
  transform: rotate(3deg);
`;

export const NoteRightWrapper = styled.div`
  position: absolute;
  top: 8.5%;
  right: 14%;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 82%;
`;

export const Inputs = styled.div`
  width: 125%;
  height: 64%;
  padding-top: 50px;
  background-image: url(${Memo3});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Label = styled.div`
  width: 40%;
  margin-right: 10px;
  background-image: url(${MaskingTape});
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 16px;
  font-family: var(--font-note);
  text-align: center;
`;

export const Input = styled.textarea`
  width: 120%;
  font-size: 14px;
  border: none;
  background-color: transparent;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
  }
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 7px;
  margin-right: 20px;
  font-size: 12px;
  border-radius: 10px;
  border: 2px solid var(--main-green);
  background-color: #fff;
  color: var(--main-green);
  font-weight: 900;
  margin-left: auto;
`;
