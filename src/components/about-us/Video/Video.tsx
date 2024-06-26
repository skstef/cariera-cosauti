import React from "react";
import styles from "./Video.module.scss";

export const Video = () => {
  return (
    <section className={styles.section}>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/yudZIXQor7I?si=1wRayN5gqMDSVSPq&modestbranding=1&showinfo=0&fs=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </section>
  );
};
