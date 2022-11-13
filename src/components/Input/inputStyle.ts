import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 30px;
  border: none;
  margin-bottom: 33px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  padding: 21px 118px;
  color: rgba(117, 108, 108, 0.6);
  outline: none;
  letter-spacing: -0.3px;
  @media (max-width: 768px) {
    margin-bottom: 17px;
    padding: 21px 105px;
    width: 100%;
  }
  @media (max-width: 480px) {
    margin-bottom: 15px;
    width: 90%;
  }
`;
