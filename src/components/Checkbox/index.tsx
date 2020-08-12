import React, { InputHTMLAttributes } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({ ...rest }) => {
  return <input type="checkbox" name="" id="" {...rest} />;
};

export default Checkbox;
