import React from 'react';
import styles from './style.module.scss'
import Category from '../Category';

const Directory = ({categories}) => {
 
  return (
    <div className={styles.directory}>
      {
        categories?.map((value)=>(
            <Category value={value} key={value.id}/>
        ))
      }
    </div>
  );
}

export default Directory;
