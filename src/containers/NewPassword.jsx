import React from 'react';
import '@styles/NewPassword.sass';

const NewPassword = () => {
  return (
    <main className="container">
      <figure className="logo__container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="Yard Sale logo" />
      </figure>

      <div className="form__container">
        <div className="form__header">
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for your account.</p>
        </div>

        <form className="form" action="/">
          <label className="label" for="new-password">Password</label>
          <input className="input input__new-password" type="password" id="new-password" placeholder="********" required />

          <label className="label" for="re-enter-password">Re-enter password</label>
          <input className="input input__new-password" type="password" id="re-enter-password" placeholder="********" required />

          <input className="primary__btn new-password__btn" type="submit" value="Confirm new password" />
        </form>
      </div>
    </main>
  );
}

export default NewPassword;