import Select, { SingleValue } from "react-select";
import { IOption } from "../../types/type";
import { CustomStyles } from "./selectStyle";

interface IProps {
  onChange: (tips: number) => void;
  tips: number;
}

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const CustomSelect = ({ onChange, tips }: IProps) => {
  const options: IOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];
  const handleChange = (option: SingleValue<IOption>) => {
    if (option) onChange(option.value);
  };

  const getTips = () => {
    return tips ? options.find((option) => option.value === tips) : options[0];
  };

  return (
    <Select
      options={options}
      styles={CustomStyles}
      onChange={handleChange}
      isMulti={false}
      value={getTips()}
      isSearchable={false}
    />
  );
};
