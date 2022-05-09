import React from 'react';
import Figure from '@components/Figure';
import Title from '@components/Title';
import Label from '@components/Label';
import Input from '@components/Input';
import '@styles/NewPassword.sass';

const NewPassword = () => {
  return (
    <main className="container">
      <Figure logo />

      <div className="form__container">
        <Title divClass="form__header" title="Create a new password" subtitle="Enter a new password for your account." />

        <form className="form" action="/">
          <Label to="new-password">Password</Label>
          <Input className="input__new-password" type="password" id="new-password" placeholder="********" />

          <Label to="re-new-password">Re-enter password</Label>
          <Input className="input__new-password" type="password" id="re-new-password" placeholder="********" />

          <Input className="new-password__btn" type="submit" value="Confirm new password" />
        </form>
      </div>
    </main>
  );
}

export default NewPassword;