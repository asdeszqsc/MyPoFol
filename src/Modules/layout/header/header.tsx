import React from "react";
import styles from "./header.module.scss";
import HeaderMenu from "./headerMenu/headerMenu";

function Header() {
	return (
		<div className={styles.root}>
			<HeaderMenu />
		</div>
	);
}
export default Header;
