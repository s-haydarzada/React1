import React from 'react';
import styles from "./style.module.scss";
import ShopItem from '../../Components/ShopItem'

const Shop = () => {
  return (
    <div className={styles.Shop}>
      <div className={styles.title}>
      <h1>Hats</h1>
      </div>
      <div className={styles.components}>
    < ShopItem/>
    < ShopItem/>
    < ShopItem/>
    < ShopItem/>
    </div>
    </div>
  );
}

export default Shop;
