import React from 'react';
import Product from '@containers/Product';
import '@styles/Home.sass';

const Home = () => {
  return (
    <main className="container">
      <section className="cards__container">
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  )
}

export default Home;