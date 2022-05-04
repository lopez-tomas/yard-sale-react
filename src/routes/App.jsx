import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import PasswordRecovery from '@containers/PasswordRecovery';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;