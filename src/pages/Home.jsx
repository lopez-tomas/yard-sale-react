import React from 'react';
import Header from '@components/Header';
import Product from '@components/Product';
import '@styles/Home.sass';

const Home = () => {
  return (
    <body>
      <Header />

      <main class="container">
        <section className="cards__container">
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </body>
  )
}

export default Home