import React from 'react';
import styles from './postCardThumbnail.module.scss';

interface thumbnailProps {
  thumbnailSrc: string,
}

export const PostCardThumbnail = ({ thumbnailSrc }: thumbnailProps) => {
  return (<div className={styles.root}>
    <img alt='thumbnail' src={thumbnailSrc} />
  </div>);
};
