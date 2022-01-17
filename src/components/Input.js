import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

export default function Input({ label, placeholder, name, width, ...rest }) {
  return (
    <StyledDiv className="formControl">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        style={{ width: `${width}` }}
        {...rest}
      ></Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0.5rem 2rem;
  label {
    color: #a8a7a7;
  }
  input {
    margin: 1rem 0rem;
    color: #696969;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #243153;
    border-radius: 10px;
  }
`;
