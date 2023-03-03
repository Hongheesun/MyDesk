import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 35%;
  z-index: 1;
  width: 90%;
  height: 110%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px -1px 10px 1px #767676;
`;

export const Header = styled.div`
  padding: 20px;
  text-align: right;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: #606060;
`;
