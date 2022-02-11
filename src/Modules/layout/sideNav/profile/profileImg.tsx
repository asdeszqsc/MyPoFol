import React from "react";
import profileImg from "assets/profile/profile.jpg";
import githubIcon from "assets/profile/githubIcon.png";
import styles from "./profileImg.module.scss";

interface ProfileImgProps {
	gitLink: string,
}

function ProfileImg({ gitLink }: ProfileImgProps) {
	return (
		<div className={styles.profile}>
			<div
				style={{ background: `no-repeat center / contain url(${profileImg})` }}
				className={styles.img_box}
			>
				{gitLink ? (
					<a className={styles.git_img} href={gitLink} rel="noreferrer" target="_blank">
						<img width="50px" src={githubIcon} />
					</a>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default ProfileImg;
