import React, { useState } from "react";
import styles from "./Politics.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cx from "classnames";
import {
  AccordionProps,
  AccordionSummaryProps,
  styled,
  useMediaQuery,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: "#161616",
  marginBottom: "30px",
  border: "none",
  "&::before": {
    display: "none",
  },
  "&:first-child": {
    marginTop: "60px !important",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", fill: "#E8CF7A" }} />
    }
    {...props}
  />
))(() => ({
  background: "#161616",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  ".MuiAccordionSummary-content": {
    margin: "16px 0",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  background: "#161616",
  paddingTop: 0,
}));

export const Politics = () => {
  const { t, i18n } = useTranslation("index");
  const [expanded, setExpanded] = useState<string | null>("panel0");

  const isTablet = useMediaQuery("(max-width:1100px)");

  const politicsList = [
    {
      name: t("policies_cardTitle_1"),
      content: t("policies_cardContent_1"),
      number: 1,
    },
    {
      name: t("policies_cardTitle_2"),
      content: t("policies_cardContent_2"),
      number: 2,
    },
    {
      name: t("policies_cardTitle_3"),
      content: t("policies_cardContent_3"),
      number: 3,
    },
    {
      name: t("policies_cardTitle_4"),
      content: t("policies_cardContent_4"),
      number: 4,
    },
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : null);
    };

  return (
    <section
      id="policies"
      className={cx(styles.section, {
        [styles.sectionExpanded]: i18n.language === "ru",
      })}
    >
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHeader}>
          <h3>{t("policies_title")}</h3>
          <p>{t("policies_subTitle")}</p>
        </div>

        {!isTablet && (
          <div className={styles.cardsWrapper}>
            {politicsList.map((el) => {
              return (
                <div key={el.number} className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardTitleWrapper}>
                      <p className={styles.cardNumber}>{el.number}.</p>
                      <p className={styles.cardTitle}>{el.name}</p>
                    </div>

                    <p className={styles.cardContent}>{el.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {isTablet && (
          <div className={styles.accordionsWrapper}>
            {politicsList.map((el, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${index}d-content`}
                  id={`panel${index}d-header`}
                >
                  <span
                    className={cx(
                      styles.accordionTitle,
                      styles.accordionTitleNumber
                    )}
                  >
                    {index + 1}.
                  </span>
                  <p className={styles.accordionTitle}>{el.name}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className={styles.accordionDetails}>{el.content}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
      </div>

      <Image
        className={cx(styles.sectionImage, "visibleOn1100AndMore")}
        src="/images/politics.webp"
        width={1920}
        height={732}
        alt="Politicile de bază"
      />

      <Image
        className={cx(styles.sectionImage, "visibleOn1100Less")}
        src="/images/politicsTablet.webp"
        width={1920}
        height={732}
        alt="Politicile de bază"
      />
    </section>
  );
};
