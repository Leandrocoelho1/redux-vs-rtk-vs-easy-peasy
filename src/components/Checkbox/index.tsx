import React, { InputHTMLAttributes } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

import { Container } from "./styles";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({ id, ...rest }) => {
  return (
    <Container htmlFor={id}>
      <input type="checkbox" name={id} id={id} {...rest} />
      <div>
        <MdCheckBox size={24} />
      </div>
      <MdCheckBoxOutlineBlank size={24} />
    </Container>
  );
};

export default Checkbox;
