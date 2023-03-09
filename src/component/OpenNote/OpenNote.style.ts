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
  top: 20%;
  left: 10%;
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
  top: 48%;
  left: 14%;
  width: 30%;
  height: 31%;
  object-fit: cover;
  transform: rotate(3deg);
`;

export const NoteRightWrapper = styled.div`
  position: absolute;
  top: 11.5%;
  right: 4.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  height: 78%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  height: 35%;
  padding: 10px;
  margin-left: 12px;
  border-radius: 10px;
  border: 2px solid var(--main-green);
  background-color: #fff;
  color: gray;
`;

export const ReviewWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(2) {
    height: 30%;
  }
`;

export const Label = styled.div`
  width: 40%;
  background-image: url(${MaskingTape});
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 16px;
  font-family: var(--font-note);
  text-align: center;
`;

export const Text = styled.div`
  width: 120%;
  font-size: 14px;
  margin-bottom: 5%;
  &:nth-child(2) {
    line-height: 1.3;
  }
`;

export const Inputs = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
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
  padding: 1%;
  font-size: 12px;
  border-radius: 10px;
  border: 2px solid var(--main-green);
  background-color: #fff;
  color: var(--main-green);
  font-weight: 900;
  margin-left: auto;
`;

export const MinimumButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & svg {
    margin-left: 7px;
    cursor: pointer;
    &:hover {
      color: lightgray;
    }
  }
`;

export const Button = styled(MinimumButton)`
  /* padding-top: 15%; */
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  right: 6.3%;
  color: #000;
  font-size: 18px;
  & svg {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
