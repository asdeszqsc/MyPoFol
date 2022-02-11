import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./headerMenu.module.scss";

function HeaderMenu() {
	const navigator = useNavigate();

	const gotoHome = () => {
		navigator("/");
	};

	const gotoBlog = () => {
		navigator("/blog");
	};
	return (
		<div className={styles.root}>
			<button className={styles.menu_btn} onClick={gotoHome}>
				Home
			</button>
			<button className={styles.menu_btn} onClick={gotoBlog}>
				Blog
			</button>
		</div>
	);
}
export default HeaderMenu;
