import React from 'react';
import styles from './style.module.scss';

const Category = ({value}) => {
  return (
   <>
   <div className={styles.container}>
        <div className={styles.bgImg} style={{backgroundImage:`url(${value.imageUrl})`}}></div>
        <div className={styles.title}>
          <h2 className={styles.name}>{value.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
   </>
  );
}

export default Category;
