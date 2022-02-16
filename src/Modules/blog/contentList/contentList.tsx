import React, { useState, useEffect } from 'react';
import { PostCard } from 'Modules/blog/postCard/postCard';
import { PostData } from 'Modules/blog/blog';
import { useObserver } from 'mobx-react';
import StoreIndex from '_store/storeIndex';
import styles from './contentList.module.scss';
import { PostList } from '../postList/postList';

const tempCardData = [
  {
    id: 1,
    postName: '벨로그에 다크 모드 적용하기',
    thumbnail: 'https://media.vlpt.us/images/velopert/post/d606f1cf-f79c-4c65-bc4d-f07ab8816213/Group%2040.png?w=640',
    previewText: '다크 모드는 2020년의 트렌드였고, 2022년인 지금, 너무나도 당연해져서 없으면 사용자가 많이 불편해 하죠. 다크 모드는 벨로그에도 정말 필요했는데요, 미루고 미루다가 드디어 이번 설날 연휴를 맞이하여 이를 적용한 이야기를 여러분들에게 들려드립니다.',
    date: new Date(2022, 1, 2),
    userThumbnail: 'https://media.vlpt.us/images/velopert/profile/ccab49cd-098c-4bb4-87dd-38044a403b61/17202261.png?w=120',
    userNickName: 'velopert',
    likeCount: 187,
    tagList: ['javascript', 'java', 'c++', 'python'],
  },
  {
    id: 2,
    postName: 'React 모바일 웹 앱 100vh 실제 화면 크기로 맞추기',
    thumbnail: 'https://media.vlpt.us/images/eunddodi/post/ffb55fa8-eeb3-47c0-a57b-8878b35e6a22/스크린샷 2022-02-06 오후 5.33.57.png?w=640',
    previewText: '나를 매우 울고싶게 했던 100vh 이슈에 대해 포스팅을 해보자😔',
    date: new Date(2022, 1, 1),
    userThumbnail: 'https://media.vlpt.us/images/eunddodi/profile/6dea9499-1905-47ce-b134-cd114fda951e/28AD62FF-5747-406B-AE82-014AEC0E7601.JPG?w=120',
    userNickName: 'eunddodi',
    likeCount: 58,
    tagList: [],
  },
  {
    id: 3,
    postName: '(2022/02/14 랭크기능 추가)[React Numble Challenge] 다른 색깔 찾기 게임 만들기',
    thumbnail: 'https://media.vlpt.us/images/junghyeonsu/post/63dac526-6d5a-4bf5-8edc-da69c48b44ed/Feb-08-2022 14-03-14.gif?w=640',
    previewText: '다른 색깔 찾기 게임 만들어본 썰',
    date: new Date(2022, 0, 30),
    userThumbnail: 'https://media.vlpt.us/images/junghyeonsu/profile/1d495524-92a5-4bc5-9797-4a63d300e272/스크린샷 2022-01-08 오후 7.44.24.png?w=120',
    userNickName: 'junghyeonsu',
    likeCount: 65,
    tagList: [],
  },
  {
    id: 4,
    postName: 'Docker를 간단하게 알아보자!',
    thumbnail: 'https://media.vlpt.us/images/limsubin/post/1a6e8b78-0117-4718-ada6-86603c9678a4/docker 썸네일.png?w=640',
    previewText: '1. Docker 란❓ 도커컨테이너 기반의 오픈 소스 가상화 플랫폼 ❓ 컨테이너? 서버 운여상에서 리소스를 논리적으로 구분하여 마치 별도의 서버인 것 처럼 사용할 수 있게 하는 기술',
    date: new Date(2022, 0, 28),
    userThumbnail: 'https://media.vlpt.us/images/limsubin/profile/3a303380-41d9-4512-a85b-9f35a4b30129/111.jpg?w=120',
    userNickName: 'limsubin',
    likeCount: 46,
    tagList: [],
  },
  {
    id: 5,
    postName: '안녕하세요, 프론트엔드 신입에 지원합니다.',
    thumbnail: 'https://media.vlpt.us/images/heyiminhye/post/986bbad3-1ca5-4628-8a2e-1498bd0acbb2/hr-process-gd20a0046a_1280.png?w=640',
    previewText: '개발자가 되려고 결심한 이유 그리고 신입 프론트엔드 개발자로 취업을 준비하며 면접에서 받은 질문과 답변 총정리',
    date: new Date(2022, 1, 11),
    userThumbnail: 'https://media.vlpt.us/images/heyiminhye/profile/3f109555-5397-4ac9-bc9b-a42d21b80f5b/95872241.png?w=120',
    userNickName: 'heyiminhye',
    likeCount: 31,
    tagList: [],
  },
  {
    id: 6,
    postName: '코드 리뷰 잘 요청하는 법',
    thumbnail: 'https://media.vlpt.us/images/seongkyun/post/4241e1d3-b96e-486d-972a-8c3474bb8668/99B016465E307B5D05.gif?w=640',
    previewText: '공손하고 유쾌하게 코드 리뷰를 요청해보자',
    date: new Date(2022, 1, 8),
    userThumbnail: 'https://media.vlpt.us/images/seongkyun/profile/376d5be7-a01e-4e6c-a7f9-b9b9e5dc83cc/15887982.png?w=120',
    userNickName: 'seongkyun',
    likeCount: 13,
    tagList: [],
  },
  {
    id: 7,
    postName: '[Vanila JS] 자라나는 나무 만들기 - 1',
    thumbnail: 'https://media.vlpt.us/images/heekang/post/11cf82da-7c7f-4db4-a57b-9d1bb7ed6bde/Hnet-image.gif?w=640',
    previewText: '존경하는 개발자이자 유튜버인 Interactive Developer 김종민 님의 영상 구글에서 입사 제의 받은 포트폴리오에 매료된 나는, 그의 문제해결능력과 창의성뿐 아니라 개발자로서 모든 점을 배우고 싶었다.',
    date: new Date(2022, 1, 14),
    userThumbnail: 'https://media.vlpt.us/images/heekang/profile/32bd2d29-cc88-46e9-bd81-03e71860abe1/IMG_5663.jpeg?w=120',
    userNickName: 'heekang',
    likeCount: 9,
    tagList: [],
  },
  {
    id: 8,
    postName: '넷플릭스 데이터를 분석하자',
    thumbnail: 'https://media.vlpt.us/images/mare-solis/post/3d5db219-c4a5-4c2e-9659-4104829fa078/img.png?w=640',
    previewText: '지난번에 넷플릭스에서 어떤 데이터를 수집하고 제공하는지 알아봤었는데요, 저에 대해 많은 데이터를 수집한다는 것에 흠칫한 한편, 그걸 제가 다운로드 받을 수 있게끔 한 점은 흡족했습니다. 그럼 넷플릭스에서 줬으니까 제 데이터를 한번 잘 써보겠습니다!',
    date: new Date(2022, 1, 12),
    userThumbnail: 'https://media.vlpt.us/images/mare-solis/profile/4a72b56e-8e67-43db-b25c-78c6064f0472/FAFBE424-DC9B-4D65-B4A0-7684E089D3B8.png?w=120',
    userNickName: 'mare-solis',
    likeCount: 5,
    tagList: [],
  },
];

export const ContentList = () => {
  const [postData, setPostData] = useState<Array<PostData>>(tempCardData);
  const { ViewSelector } = StoreIndex();

  const getPost = async () => {
    setPostData(tempCardData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return useObserver(() => (<div className={styles.root}>
    {ViewSelector.isGrid ? <PostCard cardData={postData} /> : <PostList listData={postData} />}
  </div>));
};
