import React, { } from "react";
import styles from "./homeContents.module.scss";

const Comp1 = () => {
	return <div className={styles.comp1}>1</div>;
};

const Comp2 = () => {
	return <div className={styles.comp2}>2</div>;
};

const Comp3 = () => {
	return <div className={styles.comp3}>3</div>;
};

const Comp4 = () => {
	return <div className={styles.comp4}>4</div>;
};

function HomeContents() {
	const tempComponents = [
		<Comp1 key="comp1" />,
		<Comp2 key="comp2" />,
		<Comp3 key="comp3" />,
		<Comp4 key="comp4" />,
	];

	return (
		<div className={styles.root}>
			{tempComponents.map((componenet, idx) => (
				<div key={idx} >
					{componenet}
				</div>
			))}
		</div>
	);
}
export default HomeContents;
