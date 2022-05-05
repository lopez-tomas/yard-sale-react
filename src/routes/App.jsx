import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import NewPassword from '@containers/NewPassword';
import PasswordRecovery from '@containers/PasswordRecovery';
import NotFound from '@pages/NotFound';

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;