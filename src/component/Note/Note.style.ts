import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8f9a8d;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Wrapper = styled.div``;

export const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Review = styled.div`
  /* width: 20%;
  height: 30%; */
  margin: 10px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;

export const ReviewContent = styled.div`
  width: 50%;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
