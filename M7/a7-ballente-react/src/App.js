
// import dependencies
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data
import products from './data/products.js';

// import components and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
// import ContactPage from './pages/ContactPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';

// import styles, images
// import biodiversity.jpeg from '../public';
import './App.css';




function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <header className="App-header">
          <h1>Eusebius Ballentine's React App</h1>
        </header>

      
      <Nav />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/order" element={<OrderPage products={products}/>} />
            <Route path="/staff" element={<StaffPage />} />
          </Routes>
        </section>
      </main>

      <footer>
        <p>
          &copy; Skyballengine 2023
        </p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;