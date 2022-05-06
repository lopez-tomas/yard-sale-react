import React from 'react';
import Header from '@containers/Header';
import Label from '@components/Label';
import Input from '@components/Input';

const MyAccount = () => {
  return (
    <>
      <Header />

      <main class="container">
        <div class="form__container">
          <h1 class="title">My account</h1>

          <form class="form" action="/">
            <div>
              <Label to="name">Name</Label><br />
              <Input type="text" id="name" placeholder="Your name" value="Tomás López" disabled /><br />

              <Label to="email">Email address</Label><br />
              <Input type="email" id="email" placeholder="Your email" value="tomaslopez@gmail.com" disabled /><br />

              <Label to="password">Password</Label><br />
              <Input type="password" id="password" placeholder="Your password" value="********" disabled />
            </div>

            <Input type="submit" value="Edit" secondary />
          </form>
        </div>
      </main>
    </>
  )
}

export default MyAccount;
