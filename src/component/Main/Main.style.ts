import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-green);
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

// export const ReviewContentWrapper = styled.div``;

// export const ReviewContent = styled.div``;
