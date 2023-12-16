import React, { FormEvent, useState } from "react";
import styles from "./ContactUs.module.scss";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { useTranslation } from "next-i18next";
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

  background: rgba(33, 33, 34, 0.7);
  border-color: white;
  width: 372px;
`;

export const ContactUs = () => {
  const { t } = useTranslation("index");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [conditionsAccepted, setConditionsAccepted] = useState(false);
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

      <section id="contact_us" className={styles.section}>
        <>
          <Image
            className={cx(styles.sectionImage, styles.imageMobile)}
            src="/images/contact_bg_mobile.webp"
            width={500}
            height={1249}
            alt={t("contactUs_title")}
          />
          <Image
            className={cx(styles.sectionImage, styles.imageDesktop)}
            src="/images/contact_bg.webp"
            width={1920}
            height={914}
            alt={t("contactUs_title")}
          />
        </>

        <div className={styles.sectionContents}>
          <div className={styles.sectionHeader}>
            <h3>{t("contactUs_title")}</h3>
          </div>

          <div className={styles.contents}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.contactFormRow}>
                <StyledTextField
                  required
                  className={styles.contactFormInput}
                  id="contact_surname"
                  name={"surname"}
                  label={t("contactUs_surname")}
                  autoComplete="surname"
                  InputProps={{
                    sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
                  }}
                  sx={{
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
                <StyledTextField
                  required
                  className={styles.contactFormInput}
                  id="contact_name"
                  name="name"
                  label={t("contactUs_name")}
                  autoComplete="name"
                  InputProps={{
                    sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
                  }}
                  sx={{
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
              </div>
              <div className={styles.contactFormRow}>
                <StyledTextField
                  required
                  className={styles.contactFormInput}
                  id="contact_phone"
                  name="phone"
                  label={t("contactUs_phone")}
                  autoComplete="phone"
                  InputProps={{
                    sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
                  }}
                  sx={{
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
                <StyledTextField
                  required
                  type="email"
                  className={styles.contactFormInput}
                  id="contact_email"
                  name="email"
                  label={t("contactUs_email")}
                  autoComplete="email"
                  InputProps={{
                    sx: { borderRadius: 0, height: isMobile ? "40px" : "70px" },
                  }}
                  sx={{
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
              </div>

              {isMobile && (
                <StyledTextField
                  required
                  className={styles.contactFormTextField}
                  fullWidth
                  id="contact_message"
                  name="message"
                  label={t("contactUs_message")}
                  autoComplete="message"
                  multiline
                  rows={5}
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      height: isMobile ? "150px" : "170px",
                    },
                  }}
                  sx={{
                    width: "100%",
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
              )}
              {!isMobile && (
                <StyledTextField
                  className={styles.contactFormTextField}
                  fullWidth
                  id="contact_message"
                  name="message"
                  label={t("contactUs_message")}
                  autoComplete="message"
                  multiline
                  rows={6}
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      height: isMobile ? "150px" : "170px",
                    },
                  }}
                  sx={{
                    width: "100%",
                    ".MuiFormLabel-root[data-shrink=false]": {
                      top: isMobile ? "-5px" : "5px",
                    },
                  }}
                />
              )}

              <FormControlLabel
                className={styles.contactFormCheckboxWrapper}
                control={
                  <Checkbox
                    onChange={(e) => {
                      setConditionsAccepted(e.target.checked);
                    }}
                    value={conditionsAccepted}
                  />
                }
                label={
                  <p className={styles.contactFormCheckboxLabel}>
                    {t("contactUs_agree")}
                    <Link href="/termeni-si-conditii">
                      {t("contactUs_termsAndConditions")}
                    </Link>
                  </p>
                }
              />

              <LoadingButton
                loading={isLoading}
                disabled={!conditionsAccepted}
                className={styles.contactFormSubmitBtn}
                variant="contained"
                type="submit"
              >
                {t("contactUs_submit")}
              </LoadingButton>
            </form>

            <div className={styles.address}>
              <div className={styles.addressBox}>
                <p className={styles.addressHeader}>
                  {t("contactUs_addressTitle")}
                </p>

                <address
                  className={styles.addressData}
                  dangerouslySetInnerHTML={{
                    __html: t("contactUs_addressBox"),
                  }}
                />
              </div>

              <iframe
                title="Google maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10629.985089045143!2d28.3094434!3d48.2355735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ccc31e748b306d%3A0x8ed0c1fc7b4f3a78!2sCariera%20de%20Granit%20%C5%9Fi%20Pietri%C5%9F%20din%20Soroca!5e0!3m2!1sru!2s!4v1697579848028!5m2!1sru!2s"
                width="428"
                height="424"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
