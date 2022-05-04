import React from 'react';
import '@styles/PasswordRecovery.sass';

const PasswordRecovery = () => {
  return (
    <main className="container">
      <figure className="logo__container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="Yard Sale logo" />
      </figure>

      <div className="login__container">
        <div className="login__message">
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        </div>

        <figure className="icon__container">
          <img className="icon" src="./icons/email.svg" alt="Email sent" />
        </figure>

        <button className="primary__btn login__btn">Login</button>
        <p className="resend-email">
          Didn't receive the email?
          <a className="resend" href="/">Resend</a>
        </p>
      </div>
    </main>
  )
}

export default PasswordRecovery;
