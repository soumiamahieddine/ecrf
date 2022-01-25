import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

export default function Select({ label, name, options, width, ...rest }) {
  return (
    <StyledDiv className="formControl">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        as="select"
        style={{
          width: `${width}`,
          margin: "1rem 0rem",
          color: "gray",
          padding: "0.5rem 1rem",
          border: "1.75px solid #243153",
          borderRadius: "10px",
          fontSize: "1rem",
          background: "white",
        }}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0.5rem 1rem;
  label {
    color: #a8a7a7;
  }
  /* input {
    margin: 1rem 0rem;
    color: #696969;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #243153;
    border-radius: 10px;
  } */
`;
