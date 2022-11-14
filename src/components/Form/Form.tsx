import Select from "react-select";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Subtitle, Title, TotalBill } from "./formStyle";
import { FormEvent, useEffect, useState } from "react";

export const Form = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [bill, setBill] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [tips, setTips] = useState<number>(options[0].value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const result = ((+bill / +persons) * (100 + tips)) / 100;
    setTotal(result);
  };

  useEffect(() => {
    if (bill && persons) {
      return setIsDisabled(false);
    } else {
      return setIsDisabled(true);
    }
  }, [bill, persons]);
  
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input value={bill} onChange={setBill} placeholder="Enter bill" />
      <Input
        value={persons}
        onChange={setPersons}
        placeholder="Enter  persons"
      />
      <CustomSelect setTips={setTips} tips={tips} />
      <TotalBill>Total: {total.toFixed(2)}$</TotalBill>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
