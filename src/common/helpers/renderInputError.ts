import { TErrorForm } from "../types";

interface IErrorForm {
  type: string;
  message: string;
}
export const renderInputError = (hasError: TErrorForm | IErrorForm) => {
  switch (hasError?.type) {
    case "required":
      return "This field is required.";
    case "less-date":
      return "The date must be greater than or equal to the current date.";
    case "minLength":
      return `Password must contain at least ${hasError?.message} letters`;
    case "maxLength":
      return `Maximum field length: ${hasError?.message} characters`;
    case "max":
      return `Maximum value: ${hasError?.message}`;
    case "min":
      return `Minimum value: ${hasError?.message}`;
    case "validate":
      return hasError?.message || "The field contains invalid data.";
    case "valueAsDate":
      return "Date have valid format.";
    case "pattern":
      return hasError?.message;
    default:
      return hasError?.message;
  }
};
