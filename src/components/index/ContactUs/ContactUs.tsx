import React from "react";
import styles from "./ContactUs.module.scss";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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

  background: #212122;
  border-color: white;
  width: 372px;
`;

export const ContactUs = () => {
  return (
    <section id="contact_us" className={styles.section}>
      <Image
        className={styles.sectionImage}
        src="/images/contact_bg.webp"
        width={1920}
        height={914}
        alt="Formular de contact"
      />

      <div className={styles.sectionContents}>
        <div className={styles.sectionHeader}>
          <h3>Formular de contact</h3>
        </div>

        <div className={styles.contents}>
          <form className={styles.contactForm}>
            <div className={styles.contactFormRow}>
              <StyledTextField
                className={styles.contactFormInput}
                id="surname"
                label="Nume"
                autoComplete="surname"
                InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
                sx={{
                  ".MuiFormLabel-root[data-shrink=false]": {
                    top: "5px",
                  },
                }}
              />
              <StyledTextField
                className={styles.contactFormInput}
                id="name"
                label="Prenume"
                autoComplete="name"
                InputProps={{ sx: { borderRadius: 0, height: "70px" } }}
                sx={{
                  ".MuiFormLabel-root[data-shrink=false]": {
                    top: "5px",
                  },
                }}
              />
            </div>
            <div className={styles.contactFormRow}>
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
            </div>

            <StyledTextField
              className={styles.contactFormTextField}
              fullWidth
              id="message"
              label="Mesaj"
              autoComplete="message"
              multiline
              rows={6}
              sx={{
                width: "100%",
                ".MuiFormLabel-root[data-shrink=false]": {
                  top: "5px",
                },
              }}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <FormControlLabel
              className={styles.contactFormCheckboxWrapper}
              control={<Checkbox defaultChecked />}
              label={
                <p className={styles.contactFormCheckboxLabel}>
                  Sunt de acord cu{" "}
                  <Link href="/termeni-si-conditii">Termeni și condiții</Link>
                </p>
              }
            />

            <Button
              className={styles.contactFormSubmitBtn}
              variant="contained"
              type="submit"
            >
              Trimite
            </Button>
          </form>

          <div className={styles.address}>
            <div className={styles.addressBox}>
              <p className={styles.addressHeader}>Adresa</p>

              <address className={styles.addressData}>
                str. Cosăuți 4, MD 3000,
                <br />
                or. Soroca, Republica Moldova
                <br />
                <br />
                e-mail:
                <br />
                carieracosauti@mail.ru
                <br />
                tel/fax: +373 230 20710
                <br />
                <br />
                Secția comercială
                <br />
                tel: +373 230 20722
                <br />
                <br />
                Laborator
                <br />
                tel: +373 230 20730
                <br />
                <br />
                Contabilitate
                <br />
                tel: +373 230 20712
              </address>
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
  );
};
