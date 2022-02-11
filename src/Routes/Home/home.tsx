import React, { useState } from "react";
import { throttle, debounce } from "lodash";
import HomeContents from "Modules/home/homeContents";

import Header from "Modules/layout/header/header";
import { SideNav } from "Modules/layout/sideNav/sideNav";

import styles from "./home.module.scss";

function Home() {
	const [currentLink, setCurrentLink] = useState<number>(0);

	const linkClickEvent = debounce((linkIdx: number) => {
		setCurrentLink(linkIdx);
		window.scrollTo({ top: 1080 * linkIdx, left: 0, behavior: "smooth" });
	}, 300);

	const handleScroll = throttle((e) => {
		if (e.deltaY > 0 && currentLink < 3) {
			linkClickEvent(currentLink + 1);
		} else if (e.deltaY < 0 && currentLink > 0) {
			linkClickEvent(currentLink - 1);
		}
	}, 1000);

	return (
		<div onWheel={handleScroll} className={styles.root}>
			<Header />
			<SideNav
				currentLink={currentLink}
				linkClickEvent={linkClickEvent}
			/>
			<HomeContents />
		</div>
	);
}
export default Home;
