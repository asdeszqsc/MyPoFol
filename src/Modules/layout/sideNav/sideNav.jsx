import React, { useEffect, useState } from "react";
import styles from "./sideNav.module.scss";
import ProfileImg from "./profile/profileImg";
import ProfileText from "./profile/profileText";
import SelfPublicRelation from "./selfPublicRelation/selfPublicRelation";

/* api profile data 호출 */
const tempProfile = {
  userName: "안윤회",
  nameTag: "FE Junior",
  comment: "TMAX 주니어 FE 개발자 안윤회입니다!",
  email: "yunhoe_an@tmax.co.kr",
  phone: "010-6747-8803",
  mbti: "ISTJ",
  gitLink: "https://github.com/asdeszqsc",
};

const tempLink = ["임시링크1", "임시링크2", "임시링크3", "임시링크4"];

function SideNav({ linkClickEvent, currentLink }) {
  const [profile, setProfile] = useState({});
  const [prLinks, setPrLinks] = useState([]);

  const getProfile = async () => {
    /*async call profile data*/
    setProfile(tempProfile);
  };

  const getPrLinks = async () => {
    /*async call prLink data*/
    setPrLinks(tempLink);
  };

  useEffect(() => {
    getProfile();
    getPrLinks();
  }, []);

  return (
    <div className={styles.root}>
      <ProfileImg gitLink={profile.gitLink} />
      <ProfileText profile={profile} />
      <hr className={styles.divider} />
      <SelfPublicRelation
        currentLink={currentLink}
        changeLink={linkClickEvent}
        componentLinks={prLinks}
      />
    </div>
  );
}
export default SideNav;
