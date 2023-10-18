import React from "react";
import styles from "./ContactUs.module.scss";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

export const ContactUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Formular de contact</h3>
      </div>

      <div className={styles.contents}>
        <form className={styles.contactForm}>
          <div className={styles.contactFormRow}>
            <TextField
              className={styles.contactFormInput}
              id="surname"
              label="Nume"
              autoComplete="surname"
            />
            <TextField
              className={styles.contactFormInput}
              id="name"
              label="Prenume"
              autoComplete="name"
            />
          </div>
          <div className={styles.contactFormRow}>
            <TextField
              className={styles.contactFormInput}
              id="phone"
              label="Telefon"
              autoComplete="phone"
            />
            <TextField
              className={styles.contactFormInput}
              id="email"
              label="Email"
              autoComplete="email"
            />
          </div>

          <TextField
            className={styles.contactFormTextField}
            fullWidth
            id="message"
            label="Mesaj"
            autoComplete="message"
            multiline
            rows={6}
          />

          <FormControlLabel
            className={styles.contactFormCheckboxWrapper}
            control={<Checkbox defaultChecked />}
            label={
              <p className={styles.contactFormCheckboxLabel}>
                Sunt de acord cu <a>Termeni și condiții</a>
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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10629.985089045143!2d28.3094434!3d48.2355735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ccc31e748b306d%3A0x8ed0c1fc7b4f3a78!2sCariera%20de%20Granit%20%C5%9Fi%20Pietri%C5%9F%20din%20Soroca!5e0!3m2!1sru!2s!4v1697579848028!5m2!1sru!2s"
          width="428"
          height="424"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

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
      </div>
    </section>
  );
};
