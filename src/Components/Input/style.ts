import { style } from "@mui/system";
import { FieldError } from "react-hook-form/dist/types";
import styled, { css } from "styled-components";

interface iStyledInputProps {
  error?: FieldError;
}

interface iInputProps {
  error?: FieldError;
}

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  position: absolute;
  font-size: 20px;
  top: -6px;
  /*outline: 0;*/
  padding: 0 10px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 18px, 0);
  transition: 0.3s ease-out;
`;

export const StyledInput = styled.input<iStyledInputProps>`
  ${({ error }) => {
    if (error) {
      return css`
        outline: 2px solid red;

        &:focus {
          outline-color: red;
          padding: 0 20px;
        }

        &:focus ~ ${Label}, &:valid ~ ${Label} {
          color: white;
          background-color: red;
          border-radius: 4px;
          border-left: 1px solid red;
          border-right: 1px solid red;
          font-size: 15px;
          padding: 0 10px;
          opacity: 1;
          transform: translateX(10px) translateY(-2px);
        }

        &:focus,
        &:valid {
          border: 1px solid red;
        }
      `;
    } else {
      return css`
        &:focus {
          outline-color: 1px solid rgb(0, 217, 0);
          padding: 0 20px;
        }

        &:not(:focus) {
          color: black;
          border: 1px solid var(--grey-200);
          padding: 0 20px;
          transition: 0.5s ease-out;
        }
        &:focus ~ ${Label}, &:valid ~ ${Label} {
          color: white;
          background-color: rgb(0, 217, 0);
          border-radius: 4px;
          border-left: 1px solid rgb(0, 217, 0);
          border-right: 1px solid rgb(0, 217, 0);
          font-size: 15px;
          padding: 0 10px;
          opacity: 1;
          transform: translateX(10px) translateY(-2px);
        }

        &:focus,
        &:valid {
          border: 1px solid rgb(0, 217, 0);
        }
      `;
    }
  }}
  height:50px;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;
  padding: 0 10px;
  /* border: 1px solid var(--grey-200); */
  border: none;
  border-radius: 6px;
  color: #000;
  flex: 1 1 auto;
  order: 2;
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 6px;
`;

export const StyledP = styled.p`
  color: red;
  text-align: left;
`;
