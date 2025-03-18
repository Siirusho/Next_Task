import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

export const ConsentCheckbox = ({
  fieldName,
  label,
}: {
  fieldName: string;
  label: string;
}) => {
  const { control } = useFormContext();

  const { field: checkboxField, fieldState } = useController({
    name: fieldName,
    control,
  });

  const errorHelperText = fieldState?.error?.message as string;

  return (
    <FormControlLabel
      label={label}
      sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
      control={
        <Checkbox
          sx={{
            ...(errorHelperText && {
              color: "#E11D48",
            }),
          }}
          value={checkboxField.value}
          onChange={checkboxField.onChange}
        />
      }
    />
  );
};
