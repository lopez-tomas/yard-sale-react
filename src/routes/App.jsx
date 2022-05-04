import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import PasswordRecovery from '@containers/PasswordRecovery';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-password" element={
            <Layout>
              <Login />
            </Layout>
          } />
          <Route path="/password-recovery" element={
            <Layout>
              <PasswordRecovery />
            </Layout>
          } />
        </Routes>
    </Router>
  );
}

export default App;