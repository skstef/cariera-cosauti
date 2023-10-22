import React, { useState } from "react";
import styles from "./HumanResources.module.scss";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

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
        </div>
        <p className={styles.sectionSubTitle}>
          Fii parte din echipa noastră de profesioniști
        </p>
        <form className={styles.contactForm}>
          <TextField
            className={styles.contactFormInput}
            id="nameSurname"
            label="Nume Prenume"
            autoComplete="nameSurname"
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <TextField
            className={styles.contactFormInput}
            id="phone"
            label="Telefon"
            autoComplete="phone"
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <TextField
            className={styles.contactFormInput}
            id="email"
            label="Email"
            autoComplete="email"
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <TextField
            className={styles.contactFormInput}
            id="job"
            label="Funcția"
            autoComplete="job"
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <TextField
            className={styles.contactFormTextField}
            fullWidth
            id="message"
            label="Mesaj"
            autoComplete="message"
            multiline
            rows={6}
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <MuiFileInput
            className={styles.contactFormFileInput}
            placeholder="Încarcă fișierul/CV"
            value={cvFile}
            onChange={handleCvFileChange}
            InputProps={{ sx: { borderRadius: 0 } }}
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
        height={1343}
        alt="cadre"
      />
    </section>
  );
};
