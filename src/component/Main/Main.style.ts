import styled from "styled-components";

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

export const Note = styled.img`
  height: 75vh;
  min-height: 500px;
  margin-top: 15vh;
  cursor: pointer;
`;
