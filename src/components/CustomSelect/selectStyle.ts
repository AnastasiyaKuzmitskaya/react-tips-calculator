import { StylesConfig } from "react-select";
import { IOption } from "../../types/type";

export const CustomStyles: StylesConfig<IOption> = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    display: "flex",
    background: "#fff",
    borderRadius: "30px",
    cursor:"pointer",
    padding: "18px 180px",
    border: "none",
    
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
}),

};