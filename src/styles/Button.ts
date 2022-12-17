import styled from "styled-components";

export const Button = styled.button`
  width: 90%;
  height: 40px;
  color: white;
  position: relative;
  left: 12px;
  background: var(--grey-100);
  border: 2px solid var(--grey-100);
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    width: 106px;
    height: 40px;
    color: white;
    position: relative;
    left: 20px;
    background: var(--grey-100);
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    cursor: pointer;
  } ;
`;

export const HeaderBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  font-size: 28px;
  color: var(--grey-100);
`;
