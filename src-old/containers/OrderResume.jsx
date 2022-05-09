import React from 'react';
import OrderHeader from '@components/Order/OrderHeader';
import OrderProduct from '@components/Order/OrderProduct';

const OrderResume = ({ date, quantity }) => {
  return (
    <div class="order__resume">
      <OrderHeader date={date} quantity={quantity} />

      <p class="total">$ 120.00</p>

      <div class="products">
        <OrderProduct productName="Bike" productPrice="30.00" />
        <OrderProduct productName="Bike" productPrice="30.00" />
        <OrderProduct productName="Bike" productPrice="30.00" />
        <OrderProduct productName="Bike" productPrice="30.00" />
      </div>
    </div>
  )
}

export default OrderResume;