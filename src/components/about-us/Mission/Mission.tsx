import React from "react";
import styles from "./Mission.module.scss";

export const Mission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>
          Misiunea și
          <br /> <span>obiectivele</span>
        </h3>
      </div>

      <div className={styles.content}>
        <p>
          Misiunea noastră este de a extrage, procesa și furniza materiale de
          calitate într-o manieră sustenabilă și responsabilă, pentru a
          satisface cerințele și nevoile industriei construcților. Aceasta
          implică respectarea mediului înconjurător și prioritizarea sănătății
          și siguranței angajaților, a clienților și a comunității.
        </p>
        <br />
        <p>Obiectivele specifice includ:</p>

        <ol>
          <li>
            <span>Extragerea responsabilă:</span> Realizarea operațiunilor de
            exploatare a granitului și pietrișului într-un mod responsabil din
            punct de vedere ecologic, ținând cont de impactul asupra mediului și
            a ecosistemelor locale.
          </li>
          <li>
            <span>Producție eficientă:</span> Eficientizarea proceselor de
            producție pentru a asigura o cantitate suficientă de materiale de
            calitate, cu costuri optime și în timp util.
          </li>
          <li>
            <span>Calitate superioară:</span> Asigurarea calității superioare a
            materialelor de granit și pietriș pentru a satisface standardele
            industriale și cerințele clienților, contribuind astfel la
            construcții solide și durabile.
          </li>
          <li>
            <span>Sănătate și siguranță ocupțională:</span> Prioritizarea
            sănătății și siguranței angajaților prin implementarea măsurilor
            adecvate, antrenarea regulată și respectarea standardelor de
            securitate pentru a preveni accidentele și a asigura un mediu de
            lucru sigur.
          </li>
          <li>
            <span>Inovare și eficiență energetică:</span> Utilizarea tehnologiei
            moderne și a practicilor inovatoare pentru a optimiza operațiunile,
            minimizând consumul de energie și impactul asupra mediului.
          </li>
          <li>
            <span>Dezvoltare durabilă:</span> Contribuirea la dezvoltarea
            sustenabilă a comunității locale prin implicare activă în proiecte
            sociale și mediu, susținând comunitățile din vecinătate și
            încurajând dezvoltarea economică echilibrată.
          </li>
          <li>
            <span>Transparență și responsabilitate socială:</span> Comunicarea
            transparentă și deschisă a practicilor și impactului asupra
            mediului, precum și responsabilitatea față de comunitate,
            contribuind la construirea unei reputații pozitive și la relații de
            lungă durată cu toți partenerii.
          </li>
        </ol>
      </div>
    </section>
  );
};
