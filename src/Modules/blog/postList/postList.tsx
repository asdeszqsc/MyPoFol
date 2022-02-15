import React from 'react';
import { PostData } from 'Modules/blog/blog';
import styles from './postList.module.scss';

interface PostListProps {
  listData: Array<PostData>,
}

export const PostList = ({ listData }: PostListProps) => {
  console.log(listData);
  return (
    <div className={styles.root}>
      {listData.map((post: PostData) => (<div className={styles.cardForm} key={post.id}>
        <div>
          <div>
            <img alt='userThumbnail' src={post.userThumbnail} />
            <span>{post.userNickName}</span>
          </div>
          <div>
            <img alt='postThumbnail' src={post.thumbnail} />
          </div>
          <div>
            <p>{post.postName}</p>
            <p>{post.previewText}</p>
          </div>
          <div>tag List</div>
          <div>footer</div>
        </div>
      </div>))}
    </div>);
};
