import React from 'react';

import { CATEGORIES } from '@/constants';

import styles from './SearchCategory.module.css';

interface Props {
  active: string;
  onChangeTab(active: string): void;
}

const SearchCategory = ({ active, onChangeTab }: Props) => {
  return (
    <div className={styles.tab}>
      {CATEGORIES.map((item) => (
        <button
          key={item}
          type="button"
          className={`${styles.list} ${active === item.toLocaleLowerCase() ? styles.active : ''}`}
          onClick={() => onChangeTab(item.toLocaleLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SearchCategory;
