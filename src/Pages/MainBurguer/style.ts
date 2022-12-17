import styled from "styled-components";

export const StyleMain = styled.main`
  margin: 0 auto;
  width: 1340px;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
