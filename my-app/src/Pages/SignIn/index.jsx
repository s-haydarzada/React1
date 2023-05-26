import React from 'react';
import styles from './style.module.scss'

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.left}>
        <header>
          <h2>Already have an account?</h2>
          <h3>Sign in with your email and password</h3>
        </header>
        <form action="">
          <input type="email" name="email" id="email" placeholder='Email' />
          <br />
          <input type="password" name="password" id="password" placeholder='Password' />
        </form>
        <div className={styles.btn}>
          <button className={styles.left}>Sign In</button>
          <button className={styles.right}>Sign in with Google</button>
        </div>
      </div>
      <div className={styles.right}>
        <header>
          <h2>Don't have an account?</h2>
          <h3>Sign up with your email and password</h3>
        </header>
        <form action="">
            <input type="text" name="displayName" id="displayName" placeholder='Display Name'/>
          <br />
          <input type="email" name="email" id="email" placeholder='Email'/>
          <br />
          <input type="password" name="password" id="password" placeholder='Password' />
          <br />
          <input type="password" name="password" id="password" placeholder='Confirm Password'/>
          <br />
          <button className={styles.btn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
