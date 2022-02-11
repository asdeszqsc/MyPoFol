import React from "react";
import styles from "./selfPublicRelation.module.scss";

interface SelfPublicRelationProps {
	componentLinks: Array<string>,
	changeLink: (idx: number) => void;
	currentLink: number,
}

function SelfPublicRelation({ componentLinks, changeLink, currentLink }: SelfPublicRelationProps) {
	return (
		<div className={styles.root}>
			{componentLinks?.map((link, idx) => (
				<div
					className={`${styles.link_list} ${idx === currentLink ? styles.link_current : ""}`}
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
