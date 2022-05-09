import React from 'react';
import { Link } from 'react-router-dom';
import Label from '@components/Label';
import Input from '@components/Input';
import '@styles/MyAccount.sass';

const MyAccount = ({ create, edit }) => {
  return (
    <main class="container">
      <div class="form__container">
        <h1 class="title">My account</h1>

        <form class="form" action="/">
          <div>
            <Label to="name">Name</Label><br />
            <Input type="text" id="name" placeholder="Your name" value={create ? "" : "Tomás López"} disabled={create || edit ? false : true} /><br />

            <Label to="email">Email address</Label><br />
            <Input type="email" id="email" placeholder="Your email" value={create ? "" :"tomaslopez@gmail.com"} disabled={create || edit ? false : true} /><br />

            <Label to="password">Password</Label><br />
            <Input type="password" id="password" placeholder="Your password" value={create ? "" :"********"} disabled={create || edit ? false : true} />
          </div>

          <Link to={create ? "/" : edit ? "/my-account" : "/my-account-edit"}>
            <Input type="submit" value={create ? "Create account" : edit ? "Save" : "Edit"} secondary={create || edit ? false : true} />
          </Link>
        </form>
      </div>
    </main>
  )
}

export default MyAccount;