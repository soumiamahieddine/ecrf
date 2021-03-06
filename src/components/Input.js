import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

export default function Input({
  label,
  placeholder,
  name,
  width,
  height,
  unit,
  ...rest
}) {
  return (
    <StyledDiv className="formControl">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="inline">
        <Field
          id={name}
          name={name}
          placeholder={placeholder}
          style={{ width: `${width}`, height: `${height}` }}
          {...rest}
        ></Field>
        <span className="unit">{unit}</span>
      </div>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0rem 0rem;
  label {
    color: #a8a7a7;
  }
  input {
    margin: 0.5rem 0rem;
    color: #696969;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #243153;
    border-radius: 10px;
  }
  .inline {
    display: flex;
    flex-direction: row;
    justify-content: center;  
  }
  span {
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
