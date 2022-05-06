import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@containers/Header';
import Figure from '@components/Figure';
import Title from '@components/Title';
import Button from '@components/Button';
import '@styles/PasswordRecovery.sass';

const PasswordRecoverySuccess = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Figure logo />

        <div className="login__container">
          <Title divClass="login__message" title="Email has been sent!" subtitle="Please check your inbox for instructions on how to reset the password" />

          <Figure figureClass="icon__container" imageClass="icon" src="./icons/email.svg" alt="Email sent" />

          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <p className="resend-email">
            Didn't receive the email?
            <a className="resend" href="/password-recovery"> Resend</a>
          </p>
        </div>
      </main>
    </>
  )
}

export default PasswordRecoverySuccess;