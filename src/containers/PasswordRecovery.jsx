import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/PasswordRecovery.sass';
import Figure from '@components/Figure';
import Button from '@components/Button';

const PasswordRecovery = () => {
  return (
    <main className="container">
      <Figure logo={true} />

      <div className="login__container">
        <div className="login__message">
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        </div>

        <figure className="icon__container">
          <img className="icon" src="./icons/email.svg" alt="Email sent" />
        </figure>

        <Link to="/login">
          <Button variant="primary">Login</Button>
        </Link>
        <p className="resend-email">
          Didn't receive the email?
          <a className="resend" href="/password-recovery"> Resend</a>
        </p>
      </div>
    </main>
  )
}

export default PasswordRecovery;