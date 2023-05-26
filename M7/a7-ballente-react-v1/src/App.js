// import dependencies
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data
import products from './data/products';

// import components and pages
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import GalleryPage from './pages/GalleryPage';
// import StaffPage from './pages/StaffPage';
// import OrderPage from './pages/OrderPage';

// import styles, images
// import { GiTeacher } from 'react-icons/gi';
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
            {/* <Route path="/gallery" element={<GalleryPage />} /> */}
            {/* <Route path="/ordering" element={<OrderPage products={products}/>} /> */}
            {/* <Route path="/staff" element={<StaffPage />} /> */}
          </Routes>
        </section>
      </main>

      <footer>
        <p>
          &#169 Skyballengine 2023
        </p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
