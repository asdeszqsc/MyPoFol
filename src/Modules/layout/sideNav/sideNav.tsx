import React, { useEffect, useState } from 'react';
import styles from './sideNav.module.scss';
import ProfileImg from './profile/profileImg';
import ProfileText from './profile/profileText';
import SelfPublicRelation from './selfPublicRelation/selfPublicRelation';

interface SideNavProps {
	linkClickEvent: (idx: number) => void;
	currentLink: number,
}

export interface ProfileInfo {
	userName: string,
	nameTag: string,
	comment: string,
	email: string,
	phone: string,
	mbti: string,
	gitLink: string
}

const tempProfile = {
	userName: '안윤회',
	nameTag: 'FE Junior',
	comment: 'TMAX 주니어 FE 개발자 안윤회입니다!',
	email: 'yunhoe_an@tmax.co.kr',
	phone: '010-6747-8803',
	mbti: 'ISTJ',
	gitLink: 'https://github.com/asdeszqsc',
};

export const SideNav = ({ linkClickEvent, currentLink }: SideNavProps) => {
	const [profile, setProfile] = useState<ProfileInfo>({
		userName: '',
		nameTag: '',
		comment: '',
		email: '',
		phone: '',
		mbti: '',
		gitLink: '',
	});
	const [prLinks, setPrLinks] = useState<string[]>([]);

	const tempLink = ['임시링크1', '임시링크2', '임시링크3', '임시링크4'];

	const getProfile = async () => {
		/* async call profile data */
		setProfile(tempProfile);
	};

	const getPrLinks = async () => {
		/* async call prLink data */
		setPrLinks(tempLink);
	};

	useEffect(() => {
		getProfile();
		getPrLinks();
	}, []);

	return (
		<div className={styles.root}>
			<ProfileImg gitLink={profile?.gitLink} />
			<ProfileText profile={profile} />
			<hr className={styles.divider} />
			<SelfPublicRelation
				currentLink={currentLink}
				changeLink={linkClickEvent}
				componentLinks={prLinks}
			/>
		</div>
	);
};
