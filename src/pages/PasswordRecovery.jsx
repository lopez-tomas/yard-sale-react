import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@containers/Header';
import Title from '@components/Title';
import Label from '@components/Label';
import Input from '@components/Input';
import Button from '@components/Button';
import '@styles/PasswordRecovery.sass';

const PasswordRecovery = () => {
  return (
    <>
      <Header />

      <main className="container">
        <div className="login__container">
          <Title divClass="login__message" title="Password recovery" subtitle="Inform the email address used to create your account" />

          <form className="form" action="/">
            <Label to="email-recovery">Email address</Label>
            <Input type="email" id="email-recovery" placeholder="Your email address" />

            <Link to="/password-recovery-success">
              <Button>Submit</Button>
            </Link>
          </form>
          <p className="resend-email">
            <a className="resend" href="/login"> Back to login</a>
          </p>
        </div>
      </main>
    </>
  )
}

export default PasswordRecovery;