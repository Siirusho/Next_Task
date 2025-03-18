import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthFormBody } from "./Body";
import { authValidationSchema } from "./validation";

export const AuthForm = () => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(authValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthFormBody />
      </form>
    </FormProvider>
  );
};
