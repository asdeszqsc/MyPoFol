import React, { useState, useCallback } from "react";
import { throttle } from "lodash";
import HomeContents from "Modules/home/homeContents";
import styles from "./home.module.scss";
import Header from "Modules/layout/header/header";
import SideNav from "Modules/layout/sideNav/sideNav";

function Home() {
  const [currentLink, setCurrentLink] = useState(0);

  const linkClickEvent = (linkIdx) => {
    setCurrentLink(linkIdx);
    window.scrollTo({ top: 1080 * linkIdx, left: 0, behavior: "smooth" });
  };

  const test = useCallback((e) => {
    throttle(()=>{console.log(e);}, 100);
    
  });

  const handleScroll = throttle((e) => {
    console.log(e.type);
    if (e.deltaY > 0 && currentLink < 3) {
      linkClickEvent(currentLink + 1);
    } else if (e.deltaY < 0 && currentLink > 0) {
      linkClickEvent(currentLink - 1);
    }
  }, 1000);

  return (
    <div onWheel={test} className={styles.root}>
      <Header />
      <SideNav
        scrollEvent={handleScroll}
        currentLink={currentLink}
        linkClickEvent={linkClickEvent}
      />
      <HomeContents currentLink={currentLink} />
    </div>
  );
}
export default Home;
