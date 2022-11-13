import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 45px;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -0.3px;
  color: #000000;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 45px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.3px;

  color: rgba(117, 108, 108, 0.57);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TotalBill = styled.p`
  justify-content: flex-start;
  margin: 45px 0;

  font-weight: 500;
  font-size: 24px;

  color: #000000;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
