import React, { useState } from "react";
import styles from "./HumanResources.module.scss";
import Image from "next/image";
import { Button, TextField, styled, useMediaQuery } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useTranslation } from "next-i18next";

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
    color: rgba(255, 255, 255, 0.7);
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
  const { t } = useTranslation("index");
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleCvFileChange = (newValue: File | null) => {
    setCvFile(newValue);
  };

  return (
    <section id="human_resources" className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>
          <h3>{t("humanResources_title")}</h3>
          <p>{t("humanResources_subTitle")}</p>
        </div>

        <form className={styles.contactForm}>
          <StyledTextField
            className={styles.contactFormInput}
            id="nameSurname"
            label={t("humanResources_nameSurname")}
            autoComplete="nameSurname"
            InputProps={{
              sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="phone"
            label={t("humanResources_phone")}
            autoComplete="phone"
            InputProps={{
              sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="email"
            label={t("humanResources_email")}
            autoComplete="email"
            InputProps={{
              sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
            }}
          />

          <StyledTextField
            className={styles.contactFormInput}
            id="job"
            label={t("humanResources_position")}
            autoComplete="job"
            InputProps={{
              sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
            }}
          />

          <StyledTextField
            className={styles.contactFormTextField}
            fullWidth
            id="message"
            label={t("humanResources_message")}
            autoComplete="message"
            multiline
            rows={isMobile ? 2 : 6}
            InputProps={{ sx: { borderRadius: 0 } }}
          />

          <StyledFileInput
            className={styles.contactFormFileInput}
            placeholder={t("humanResources_upload")}
            value={cvFile}
            //@ts-ignore
            onChange={handleCvFileChange}
            InputProps={{ sx: { borderRadius: 0, height: "160px" } }}
          />

          <div className={styles.contactFormSubmitBtnWrapper}>
            <Button
              className={styles.contactFormSubmitBtn}
              variant="contained"
              type="submit"
            >
              {t("humanResources_submit")}
            </Button>
          </div>
        </form>
      </div>

      {isDesktop ? (
        <Image
          src="/images/hr_bg.webp"
          className={styles.sectionImage}
          width={1920}
          height={1368}
          alt="cadre"
        />
      ) : (
        <Image
          src="/images/hr_bg_tablet.webp"
          className={styles.sectionImage}
          width={768}
          height={868}
          alt="cadre"
        />
      )}
    </section>
  );
};
