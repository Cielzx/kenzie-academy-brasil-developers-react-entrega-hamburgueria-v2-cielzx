import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Label, StyledInput, StyledP, Wrapper } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  error?: FieldError;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, id, error, label, ...rest }, ref) => {
    return (
      <>
        <Wrapper>
          <StyledInput
            required
            type={type}
            error={error}
            id={id}
            ref={ref}
            {...rest}
          />
          <Label>{label}</Label>
        </Wrapper>
        {error && <StyledP>{error.message}</StyledP>}
      </>
    );
  }
);
