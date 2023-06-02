// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';

// Define the function that renders the content in routes using State.
function App() {

  const [movie, setMovieToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Collection of Movies</h1>
            <p>This app uses MERN.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage setMovie={setMovieToEdit}/>} />
                    <Route path="/create" element={<AddMoviePage />} /> 
                    <Route path="/update" element={<EditMoviePage movieToEdit={movie} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright statement</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;