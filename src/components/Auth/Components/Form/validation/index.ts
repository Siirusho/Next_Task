import { string, object } from "yup";

export const authValidationSchema = object({
  email: string()
    .email("Email must be a valid email")
    .required("Email is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  password: string().required("Password is required"),
});
