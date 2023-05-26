import React from 'react';
import styles from "./style.module.scss";
import { photo } from '../../assets';


const ShopItem = () => {
    return (
        <div className={styles.shopItem}>
            <div className={styles.content}>
                <img src={photo} alt="" />
                <div className={styles.subtitle}>
                    <h4>Brown Brim</h4>
                    <p>25</p>
                </div>
                <button>Add to Card</button>
            </div>

        </div>
    )
}

export default ShopItem;
