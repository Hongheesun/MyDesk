import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -22px;
  right: 80%;
  z-index: 1;
  width: 90%;
  height: 130%;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  box-shadow: 0px -1px 10px 1px #767676;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;
  }
`;

export const Header = styled.div`
  padding: 15px;
  text-align: right;
  cursor: pointer;
  color: #606060;
`;
