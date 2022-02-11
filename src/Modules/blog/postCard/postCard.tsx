import React from 'react';
import { CardData } from 'Modules/blog/blog';
import { PostCardThumbnail } from '../postCard/postCardThumbnail/postCardThumbnail';
import styles from './postCard.module.scss';

interface PostCardProps {
  cardData: Array<CardData>,
}

export const PostCard = ({ cardData }: PostCardProps) => {
  return (
    <div className={styles.root}>
      {cardData.map((card: CardData) => (<div className={styles.cardForm} key={card.id}>
        <div className={styles.cardThumbnail}>
          <PostCardThumbnail thumbnailSrc={card.thumbnail} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardName}>{card.postName}</div>
          <div className={styles.cardPreview}>{card.previewText}</div>
          <div className={styles.cardDate}>{card.date.toDateString()}</div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userInfo}>
            <img className={styles.userThumbnail} alt='userThumbnail' src={card.userThumbnail} />
            <span>by</span>
            <span className={styles.nicknameText}>{card.userNickName}
            </span>
          </div>
          <div className={styles.likeCount}>♥ {card.likeCount}</div>
        </div>
      </div>))}
    </div>);
};
