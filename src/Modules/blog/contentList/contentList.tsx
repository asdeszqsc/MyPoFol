import React, { useState, useEffect } from 'react';
import { PostCard } from 'Modules/blog/postCard/postCard';
import { CardData } from 'Modules/blog/blog';
import styles from './contentList.module.scss';

const tempCardData = [
  {
    id: 1,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 2, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
  },
  {
    id: 2,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 2, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
  },
  {
    id: 3,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 2, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
  },
  {
    id: 4,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 2, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
  },
  {
    id: 5,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 2, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
  },
];

export const ContentList = () => {
  const [cardData, setCardData] = useState<Array<CardData>>(tempCardData);

  const getPost = async () => {
    setCardData(tempCardData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (<div className={styles.root}>
    <PostCard cardData={cardData} />
  </div>);
};
