import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

export default function TextArea({
  label,
  placeholder,
  name,
  width,
  height,
  ...rest
}) {
  return (
    <StyledDiv className="formControl">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        component="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        style={{ width: `${width}`, height: `${height}` }}
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
  margin: 0rem 0rem;
  label {
    color: #a8a7a7;
  }
  textarea {
    margin: 0.5rem 0rem;
    color: #696969;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #243153;
    border-radius: 10px;
  }
`;
