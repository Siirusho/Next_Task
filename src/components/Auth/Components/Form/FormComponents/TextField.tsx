import React, { useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import {
  FormHelperText,
  Box,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import useScrollIntoView from "@/hooks/useScrollIntoView";

export const TextField = ({
  fieldName,
  label,
  placeholder,
  type,
}: {
  fieldName: string;
  label?: string;
  placeholder?: string;
  type?: string;
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name: fieldName, control });
  const errorHelperText = fieldState?.error?.message;

  const formInputRef = useRef<HTMLInputElement>(null);

  useScrollIntoView(formInputRef, fieldState);

  return (
    <Box width={"100%"} gap={"4px"} display={"flex"} flexDirection={"column"}>
      <Typography fontSize={"14px"} color="#4C4D4F">
        {label}
      </Typography>
      <MuiTextField
        {...field}
        type={type}
        value={field.value ?? ""}
        error={Boolean(errorHelperText)}
        fullWidth
        variant="standard"
        color="primary"
        placeholder={placeholder}
        ref={formInputRef}
      />
      {errorHelperText ? (
        <FormHelperText error>{errorHelperText}</FormHelperText>
      ) : null}
    </Box>
  );
};
