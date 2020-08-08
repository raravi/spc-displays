import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainSection from './components/MainSection';
import ProductsSection from './components/ProductsSection';
import AboutUsSection from './components/AboutUsSection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/products">
          <ProductsSection />
        </Route>
        <Route path="/about">
          <AboutUsSection />
        </Route>
        <Route path="/">
          <MainSection />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
