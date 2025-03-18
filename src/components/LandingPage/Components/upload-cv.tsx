import { Typography } from "@mui/material";

import { useRef, useState } from "react";
import {
  StyledContainer,
  StyledSubmitButton,
} from "../../Auth/Components/auth.styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <StyledContainer
      onClick={() => {
        fileInputRef.current?.click();
      }}
    >
      <CloudUploadIcon sx={{ width: "94px", height: "94px" }} />
      <Typography fontSize={"32px"}>Upload Portfolio</Typography>
      <Typography fontSize="16px">( PDF or DOCX )</Typography>

      <input
        type="file"
        accept=".pdf, .docx"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      {selectedFile && (
        <>
          <Typography mb="16px">Selected file: {selectedFile.name}</Typography>
          <StyledSubmitButton variant="contained" onClick={handleUpload}>
            Upload
          </StyledSubmitButton>
        </>
      )}
    </StyledContainer>
  );
};
