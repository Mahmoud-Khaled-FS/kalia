import React from 'react';
import classes from '../styles/auth.module.css';
const AuthProvider = () => {
  return (
    <div className={classes['auth-provider']}>
      <h4>Or Sign In With</h4>
      <button type="button" className="login-with-google-btn">
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthProvider;
