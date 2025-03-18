import { Box, Typography } from "@mui/material";

import { useState } from "react";
import { StyledSubmitButton } from "./auth.styled";

export const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      alert(`File "${selectedFile.name}" uploaded successfully!`);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h5">Upload a PDF or DOCX File</Typography>

      <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />

      {selectedFile && (
        <>
          <Typography>Selected file: {selectedFile.name}</Typography>
          <StyledSubmitButton variant="contained" onClick={handleUpload}>
            Upload
          </StyledSubmitButton>
        </>
      )}
    </Box>
  );
};
