import styled from "styled-components";

export const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: #2ed2c9;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  border: none;
  padding: 13px 85px;
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #2cb1a1;
  }
  &:active {
    background-color: #42958b;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 60px;
  }
`;
