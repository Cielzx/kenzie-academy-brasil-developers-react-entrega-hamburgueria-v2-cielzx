import { FieldError } from "react-hook-form/dist/types";
import styled, { css } from "styled-components";

interface iStyledInputProps {
  error?: FieldError;
}

export const StyledInput = styled.input<iStyledInputProps>`
  ${({ error }) => {
    if (error) {
      return css`
        outline: 1px solid red;
      `;
    }
  }}
`;
