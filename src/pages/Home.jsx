import React from 'react';
import Header from '@containers/Header';
import Product from '@containers/Product';
import '@styles/Home.sass';

const Home = () => {
  return (
    <>
      <Header />

      <main class="container">
        <section className="cards__container">
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </>
  )
}

export default Home;