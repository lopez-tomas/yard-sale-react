import React from 'react';

const OrderHeader = ({ date, quantity }) => {
  return (
    <div>
      <p class="date">{date}</p>
      <p class="quantity">{quantity} articles</p>
    </div>
  )
}

export default OrderHeader;