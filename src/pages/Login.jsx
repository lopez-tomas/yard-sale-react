import React from 'react'
import { Link } from 'react-router-dom';
import Figure from '@components/Figure';
import Label from '@components/Label';
import Input from '@components/Input';
import Button from '@components/Button';
import '@styles/Login.sass';

const Login = () => {
  return (
    <main class="container">
      <Figure logo />

      <div class="form__container">
        <form class="form" action="/">
          <Label to="email">Email address</Label>
          <Input type="email" id="email" placeholder="Enter your email" />

          <Label to="password">Password</Label>
          <Input type="password" id="password" placeholder="********" />

          <Link to="/">
            <Input type="submit" value="Log in" />
          </Link>
        </form>

        <a class="new-password" href="/new-password">Forgot my password</a>
      </div>

      <div class="sign-up__container">
        <Button variant>Sign up</Button>
      </div>
    </main>
  )
}

export default Login
