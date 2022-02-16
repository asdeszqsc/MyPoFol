import React from 'react';
import { PostData } from 'Modules/blog/blog';
import styles from './postList.module.scss';

interface PostListProps {
  listData: Array<PostData>,
}

export const PostList = ({ listData }: PostListProps) => {
  return (
    <div className={styles.root}>
      {listData.map((post: PostData) => (<div className={styles.cardForm} key={post.id}>
        <div className={styles.listForm}>
          <div className={styles.userThumbnail}>
            <img alt='userThumbnail' src={post.userThumbnail} />
            <span>{post.userNickName}</span>
          </div>
          <div className={styles.postThumbnail}>
            <img alt='postThumbnail' src={post.thumbnail} />
          </div>
          <div className={styles.postBody}>
            <p className={styles.title}>{post.postName}</p>
            <p className={styles.previewText}>{post.previewText}</p>
          </div>
          <div className={styles.tagList}>{post.tagList.map((tag) => (
            <div className={styles.tag}><span>{tag}</span></div>
          ))}
          </div>
          <div className={styles.postFooter}>
            <div className={styles.date}>{post.date.toDateString()}</div>
            <div className={styles.likeCount}>❤ {post.likeCount}</div>
          </div>
        </div>
      </div>))}
    </div>);
};
