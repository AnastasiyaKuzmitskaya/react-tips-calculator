import { ChangeEvent } from "react";
import { StyledInput } from "./inputStyle";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const Input = ({ onChange, placeholder, value }: IProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      onChange={handleInput}
      placeholder={placeholder}
      value={value}
      type="number"
    />
  );
};
