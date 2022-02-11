import React from 'react';
import Header from 'Modules/layout/header/header';
import { useObserver } from 'mobx-react';
import { ContentList } from 'Modules/blog/contentList/contentList';

import styles from './blog.module.scss';

function Blog() {
  return useObserver(() => (<><Header /><div className={styles.root}>
    <ContentList />
  </div></>));
}
export default Blog;
