import React from "react";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import TextArea from "./TextArea";

export default function formikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest}></Input>;
    case "textarea":
      return <TextArea {...rest}></TextArea>;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}
