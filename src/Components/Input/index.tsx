import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, id, error, ...rest }, ref) => {
    return (
      <>
        <StyledInput type={type} error={error} id={id} ref={ref} {...rest} />
        {error && <p>{error.message}</p>}
      </>
    );
  }
);
