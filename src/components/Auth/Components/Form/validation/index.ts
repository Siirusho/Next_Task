import { string, object } from "yup";

export const authValidationSchema = object({
  email: string().required("Email is required"),
  firstName: string().required("Firstname is required"),
  lastName: string().required("Lastname is required"),
  password: string().required("Password is required"),
});
