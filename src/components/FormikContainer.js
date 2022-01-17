import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import FormikControl from "./FormikControl";

export default function FormikContainer() {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "rOption 1" },
    { key: "option 2", value: "rOption 2" },
    { key: "option 3", value: "rOption 3" },
  ];
  const checkboxOptions = [
    { key: "option 1", value: "cOption 1" },
    { key: "option 2", value: "cOption 2" },
    { key: "option 3", value: "cOption 3" },
  ];

  const initialValues = {
    email: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    selectOption: Yup.string().required(),
    radioOption: Yup.string().required(),
    checkboxOption: Yup.array().min(1).required(),
    birthDate: Yup.date().required().nullable(),
  });
  const onSubmit = (values) => console.log(values);
  return (
    <StyledDiv>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              label="email"
              type="email"
              placeholder="email"
              name="email"
            />
            <FormikControl
              control="select"
              label="selection"
              name="selectOption"
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              name="radioOption"
              label="Radio topic"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              name="checkboxOption"
              label="checkbox topic"
              options={checkboxOptions}
            />
            <FormikControl control="date" name="birthDate" label="birth Date" />
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .num {
    display: flex;
    flex-direction: row;
    input {
      display: block;
      // width: 350px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  /* .submit {
    background: #7481a4;
    width: 100%;
    height: 2.5rem;
    border: 3px solid #7481a4;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    &:hover {
      background: #546286;
    }
  } */
  /* input {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    //margin-bottom: 20px;
  } */
  .formControl {
    margin-bottom: 20px;
  }
  .error {
    color: red;
  }
`;
