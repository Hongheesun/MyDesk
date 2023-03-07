import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: #8f9a8d;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Review = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;

export const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin-left: 5%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
`;

export const ReviewContent = styled.div``;

export const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 20px;
  color: #787878;
  cursor: pointer;
`;

export const AddButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  align-self: flex-start;
`;
