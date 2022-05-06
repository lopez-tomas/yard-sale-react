import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import ProductDetails from '@containers/ProductDetails';
import MyAccount from '@containers/MyAccount';
import NewPassword from '@containers/NewPassword';
import PasswordRecovery from '@containers/PasswordRecovery';
import PasswordRecoverySuccess from '@containers/PasswordRecoverySuccess';
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