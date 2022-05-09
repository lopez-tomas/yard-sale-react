import React from 'react';
import OrderResume from '@containers/OrderResume';
import '@styles/MyOrders.sass';

const MyOrders = () => {
  return (
    <main class="container">
      <section class="order__container">
        <h1 class="title">My orders</h1>

        <OrderResume date="06.05.2022" quantity="5" />
        <OrderResume date="06.05.2022" quantity="5" />
        <OrderResume date="06.05.2022" quantity="5" />
        <OrderResume date="06.05.2022" quantity="5" />
      </section>
    </main>
  )
}

export default MyOrders;