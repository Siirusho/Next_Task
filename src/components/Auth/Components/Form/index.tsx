import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthFormBody } from "./Body";
import { authValidationSchema } from "./validation";
import { signIn } from "next-auth/react";
import { Typography } from "@mui/material";
import { UserCredentialsProps } from "../../login.types";


export const AuthForm = () => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(authValidationSchema),
  });
  const [error, setError] = useState("");
  const { handleSubmit } = methods;

  const onSubmit = async (values: UserCredentialsProps) => {
    const { email, password, firstName, lastName, consent } = values;
    const result = await signIn("credentials", {
      email,
      password,
      firstName,
      lastName,
      consent,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormBody />
      </form>
      {error && <Typography variant="subtitle1">{error}</Typography>}
    </FormProvider>
  );
};
