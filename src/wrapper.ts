import styled from "styled-components";
import shape from "./assets/shape.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: no-repeat #eaf2f2 url(${shape}) top left;
`;
