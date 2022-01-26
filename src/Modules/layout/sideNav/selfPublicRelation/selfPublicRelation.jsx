import React from "react";
import styles from "./selfPublicRelation.module.scss";

function SelfPublicRelation({ componentLinks, changeLink, currentLink }) {
  return (
    <div className={styles.root}>
      {componentLinks?.map((link, idx) => (
        <div
          className={`${styles.link_list} ${
            idx === currentLink ? styles.link_current : ""
          }`}
          key={idx}
          onClick={() => changeLink(idx)}
        >
          {link}
        </div>
      ))}
    </div>
  );
}
export default SelfPublicRelation;
