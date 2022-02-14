import React from 'react';
import { useObserver } from 'mobx-react';
import StoreIndex from '_store/storeIndex';
import styles from './blogOption.module.scss';

export const BlogOption = () => {
  const { ViewSelector } = StoreIndex();

  const changeViewGrid = () => {
    ViewSelector.handleChange(true);
    console.log(ViewSelector.isGrid);
  };

  const changeViewList = () => {
    ViewSelector.handleChange(false);
    console.log(ViewSelector.isGrid);
  };

  return useObserver(() => (<div className={styles.root}>
    <div onClick={changeViewGrid} className={styles.iconGrid}>grid</div>
    <div onClick={changeViewList} className={styles.iconList}>list</div>
  </div>));
};
