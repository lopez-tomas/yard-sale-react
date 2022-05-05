import React from 'react';
import '@styles/NewPassword.sass';
import Label from '@components/Label';
import Input from '@components/Input';

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
          <Label to="new-password">Password</Label>
          <Input type="password" id="new-password" placeholder="********" />

          <Label to="re-new-password">Re-enter password</Label>
          <Input type="password" id="re-new-password" placeholder="********" />

          <Input type="submit" value="Confirm new password" />
        </form>
      </div>
    </main>
  );
}

export default NewPassword;