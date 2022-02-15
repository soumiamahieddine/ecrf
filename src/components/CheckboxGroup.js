import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

export default function CheckboxGroup({ label, name, options, ...rest }) {
  return (
    <StyledDiv className="formControl">
      {label && <Label className="titre">{label} </Label>}
      <div className="group">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label className="label"> {option.key} </label>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </StyledDiv>
  );
}

const Label = styled.label`
  display: flex;
  justify-self: flex-start;
  color: #a8a7a7;
`;

const StyledDiv = styled.div`
  margin: 0.5rem 0rem;

  .group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .label {
      margin: 1rem;
      color: gray;
    }
  }
`;
