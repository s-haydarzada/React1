import React from 'react';
import styles from "./style.module.scss";
import { Outlet, Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import {FaCrown} from "react-icons/fa";


const Navigation = () => {
    return (
        <>
            <div className={styles.nav}>
                <div>
                    <Link className={styles.logo} to="/">
                        <FaCrown/>
                    </Link>
                </div>
                <div className={styles.navContainer}>
                    <Link to="/signin" className={styles.navLink}>Sign in</Link>
                    <Link to="/shop" className={styles.navLink}>Shop</Link>
                    <Link>
                   <BsFillBagFill/>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
