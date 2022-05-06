import React from 'react';
import OrderProduct from '@components/OrderProduct';

const OrderResume = ({ date, quantity }) => {
  return (
    <div class="order__resume">
      <div>
        <p class="date">{date}</p>
        <p class="quantity">{quantity} articles</p>
      </div>

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