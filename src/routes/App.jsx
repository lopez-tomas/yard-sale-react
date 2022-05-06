import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import PasswordRecovery from '@pages/PasswordRecovery';
import PasswordRecoverySuccess from '@pages/PasswordRecoverySuccess';
import ProductDetails from '@containers/ProductDetails';
import NotFound from '@pages/NotFound';

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/password-recovery-success" element={<PasswordRecoverySuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;