import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import HeaderLayout from '@containers/HeaderLayout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import PasswordRecovery from '@pages/PasswordRecovery';
import PasswordRecoverySuccess from '@pages/PasswordRecoverySuccess';
import MyOrders from '@pages/MyOrders';
import ShoppingCart from '@containers/ShoppingCart';
import ProductDetails from '@containers/ProductDetails';
import NotFound from '@pages/NotFound';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          } />
          <Route path="/create-account" element={
            <HeaderLayout>
              <MyAccount create />
            </HeaderLayout>
          } />
          <Route path="/login" element={
            <HeaderLayout>
              <Login />
            </HeaderLayout>
          } />
          <Route path="/my-account" element={
            <HeaderLayout>
              <MyAccount />
            </HeaderLayout>
          } />
          <Route path="/my-account-edit" element={
            <HeaderLayout>
              <MyAccount edit />
            </HeaderLayout>
          } />
          <Route path="/new-password" element={
            <HeaderLayout>
              <NewPassword />
            </HeaderLayout>
          } />
          <Route path="/password-recovery" element={
            <HeaderLayout>
              <PasswordRecovery />
            </HeaderLayout>
          } />
          <Route path="/password-recovery-success" element={
            <HeaderLayout>
              <PasswordRecoverySuccess />
            </HeaderLayout>
          } />
          <Route path="/my-orders" element={
            <HeaderLayout>
              <MyOrders />
            </HeaderLayout>
          } />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;