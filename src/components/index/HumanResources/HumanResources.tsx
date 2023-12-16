import React, { FormEvent, useState } from "react";
import styles from "./HumanResources.module.scss";
import Image from "next/image";
import {
  Alert,
  Snackbar,
  TextField,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import cx from "classnames";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@mui/lab";

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

export const HumanResources = () => {
  const { t } = useTranslation("index");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [successSnackbar, setSuccessSnackBar] = useState(false);
  const [errorSnackbar, setErrorSnackBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccessSnackbarClose = () => {
    setSuccessSnackBar(false);
  };

  const handleErrorSnackbarClose = () => {
    setErrorSnackBar(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);

    setIsLoading(true);

    try {
      await emailjs.send("", "", formProps, "");

      setSuccessSnackBar(true);
    } catch {
      setErrorSnackBar(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Snackbar
        open={successSnackbar}
        autoHideDuration={5000}
        onClose={handleSuccessSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleSuccessSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("message_success")}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={5000}
        onClose={handleErrorSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleErrorSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {t("message_error")}
        </Alert>
      </Snackbar>

      <section id="human_resources" className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>
            <h3>{t("humanResources_title")}</h3>
            <p>{t("humanResources_subTitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <StyledTextField
              required
              className={styles.contactFormInput}
              id="hr_nameSurname"
              name="nameSurname"
              label={t("humanResources_nameSurname")}
              autoComplete="nameSurname"
              InputProps={{
                sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
              }}
            />

            <StyledTextField
              required
              className={styles.contactFormInput}
              id="hr_phone"
              name="phone"
              label={t("humanResources_phone")}
              autoComplete="phone"
              InputProps={{
                sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
              }}
            />

            <StyledTextField
              required
              type="email"
              className={styles.contactFormInput}
              id="hr_email"
              name="email"
              label={t("humanResources_email")}
              autoComplete="email"
              InputProps={{
                sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
              }}
            />

            <StyledTextField
              required
              className={styles.contactFormInput}
              id="hr_job"
              name="job"
              label={t("humanResources_position")}
              autoComplete="job"
              InputProps={{
                sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
              }}
            />

            {isMobile && (
              <StyledTextField
                className={styles.contactFormTextFieldMobile}
                fullWidth
                id="hr_message"
                name="message"
                label={t("humanResources_message")}
                autoComplete="message"
                multiline
                rows={4}
                InputProps={{ sx: { borderRadius: 0 } }}
              />
            )}

            {!isMobile && (
              <StyledTextField
                className={styles.contactFormTextField}
                fullWidth
                id="hr_message"
                name="message"
                label={t("humanResources_message")}
                autoComplete="message"
                multiline
                rows={4}
                InputProps={{ sx: { borderRadius: 0 } }}
              />
            )}

            <div className={styles.contactFormSubmitBtnWrapper}>
              <LoadingButton
                loading={isLoading}
                className={styles.contactFormSubmitBtn}
                variant="contained"
                type="submit"
              >
                {t("humanResources_submit")}
              </LoadingButton>
            </div>
          </form>
        </div>

        <Image
          src="/images/hr_bg.webp"
          className={cx(styles.sectionImage, "visibleOn1100AndMore")}
          width={1920}
          height={1227}
          alt="cadre"
        />

        <Image
          src="/images/hr_bg_tablet.webp"
          className={cx(styles.sectionImage, "visibleOn1100Less")}
          width={768}
          height={868}
          alt="cadre"
        />
      </section>
    </>
  );
};
