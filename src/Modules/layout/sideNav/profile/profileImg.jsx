import React from "react";
import styles from "./profileImg.module.scss";
import profileImg from "assets/profile/profile.jpg";
import githubIcon from "assets/profile/githubIcon.png";

function ProfileImg({ gitLink }) {
  return (
    <div className={styles.profile}>
      <div
        style={{ background: `no-repeat center / contain url(${profileImg})` }}
        className={styles.img_box}
      >
        {gitLink ? (
          <a
            className={styles.git_img}
            href={gitLink}
            rel="noreferrer"
            target="_blank"
          >
            <img width="50px" src={githubIcon} />
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ProfileImg;
