// import 'dotenv/config';
// import dependencies
import { React, useState } from 'react';

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
import EditPage from './pages/EditPage.js';
import CreatePage from './pages/CreatePage.js';
import TopicsPage from './pages/TopicsPage.js';
import LogPage from './pages/LogPage.js';


// import styles, images
// import biodiversity.jpeg from '../public';
import './App.css';




function App() {

  const [planting, setPlanting] = useState([])
  const [plantingToEdit, setPlantingToEdit] = useState();

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
            <Route path="/log" element={<LogPage setPlanting={setPlanting} setPlantingToEdit={setPlantingToEdit}/>} />
            <Route path="/add-planting" element={<CreatePage />} />
            <Route path="/edit-planting" element={<EditPage planting={planting} plantingToEdit={plantingToEdit} />} />
            <Route path="/topics" element={<TopicsPage />} />
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