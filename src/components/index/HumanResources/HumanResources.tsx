import React, { useState } from "react";
import styles from "./HumanResources.module.scss";
import Image from "next/image";
import { Button, TextField, styled } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }

  fieldset {
    border-color: white;
  }

  & .muiformlabel-root[data-shrink=false]: {
    color: #f7f0e3;
  }

  border-color: white;
`;

const StyledFileInput = styled(MuiFileInput)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
  & .MuiFileInput-placeholder {
    color: #fffff !important;
  }

  fieldset {
    border-color: white;
  }

  border-color: white;
`;

export const HumanResources = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleCvFileChange = (newValue: File | null) => {
    setCvFile(newValue);
  };

  return (
    <section id="human_resources" className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>
          <h3>Cadre</h3>
          <p>Fii parte din echipa noastră de profesioniști</p>
        </div>

        <form className={styles.contactForm}>
          <StyledTextField
            className={styles.contactFormInput}
            id="nameSurname"
            label="Nume Prenume"
            autoComplete="nameSurname"
            InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
            sx={{
              ".MuiFormLabel-root[data-shrink=false]": {
                top: "5px",
              },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="phone"
            label="Telefon"
            autoComplete="phone"
            InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
            sx={{
              ".MuiFormLabel-root[data-shrink=false]": {
                top: "5px",
              },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="email"
            label="Email"
            autoComplete="email"
            InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
            sx={{
              ".MuiFormLabel-root[data-shrink=false]": {
                top: "5px",
              },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="job"
            label="Funcția"
            autoComplete="job"
            InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
            sx={{
              ".MuiFormLabel-root[data-shrink=false]": {
                top: "5px",
              },
            }}
          />

          <StyledTextField
            className={styles.contactFormTextField}
            fullWidth
            id="message"
            label="Mesaj"
            autoComplete="message"
            multiline
            rows={6}
            InputProps={{ sx: { borderRadius: 0 } }}
            sx={{
              width: "100%",
              ".MuiFormLabel-root[data-shrink=false]": {
                top: "5px",
              },
            }}
          />

          <StyledFileInput
            className={styles.contactFormFileInput}
            placeholder="Încarcă fișierul/CV"
            value={cvFile}
            //@ts-ignore
            onChange={handleCvFileChange}
            InputProps={{ sx: { borderRadius: 0, height: "160px" } }}
          />

          <Button
            className={styles.contactFormSubmitBtn}
            variant="contained"
            type="submit"
          >
            Trimite
          </Button>
        </form>
      </div>

      <Image
        src="/images/hr_bg.webp"
        className={styles.sectionImage}
        width={1920}
        height={1368}
        alt="cadre"
      />
    </section>
  );
};
