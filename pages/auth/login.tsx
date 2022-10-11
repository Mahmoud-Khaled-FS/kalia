import type { NextPageWithLayout } from '../_app';
import React, { ReactElement } from 'react';
import Header from '../../components/layout/Header';
import AuthBanner from '../../components/auth/AuthBanner';
import classes from '../../components/styles/auth.module.css';
import AuthForm from '../../components/auth/AuthForm';
import Link from 'next/link';
import AuthProvider from '../../components/auth/AuthProvider';
const Login: NextPageWithLayout = () => {
  return (
    <div>
      <div className="container">
        <div className={classes['auth-page']}>
          <AuthForm>
            <AuthForm.Header text="Welcome back! Login to your existing account of Kalia" title="Login" />
            <AuthForm.Input id="email" label="Email" placeholder="Enter Your Email" type="email" />
            <AuthForm.Input id="password" label="Password" placeholder="Enter Your Password" type="password" />
            <Link href="/">
              <a className={classes['forget-link']}>Forget Password?</a>
            </Link>
            <AuthForm.Button>Login</AuthForm.Button>
            <AuthProvider />
          </AuthForm>
          <p className={classes['regiseter-link']}>
            Don&apos;t have an account? <Link href="/">Register Now</Link>
          </p>
          {/* <AuthBanner /> */}
        </div>
      </div>
    </div>
  );
};

Login.getLayout = (page: ReactElement) => (
  <>
    <Header />
    {page}
  </>
);

export default Login;
