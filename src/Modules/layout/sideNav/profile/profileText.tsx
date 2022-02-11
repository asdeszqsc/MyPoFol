import React from "react";
import { ProfileInfo } from 'Modules/layout/sideNav/sideNav';
import styles from "./profileText.module.scss";

interface ProfileTextProps {
	profile: ProfileInfo,
}

function ProfileText({ profile }: ProfileTextProps) {
	return (
		<div className={styles.profile_text}>
			<div className={styles.name}>
				[{profile.nameTag}] {profile.userName}
			</div>
			<div className={styles.comment}>{profile.comment}</div>
			<div className={styles.addition_info_box}>
				<div className={styles.info_text}>
					<span className={styles.info_title}>email: </span>
					<span>{profile.email}</span>
				</div>
				<div className={styles.info_text}>
					<span className={styles.info_title}>phone: </span>
					<span>{profile.phone}</span>
				</div>
				<div className={styles.info_text}>
					<span className={styles.info_title}>MBTI: </span>
					<span>{profile.mbti}</span>
				</div>
			</div>
		</div>
	);
}
export default ProfileText;
