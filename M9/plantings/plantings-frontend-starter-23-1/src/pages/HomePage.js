import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieList from '../components/MovieList';

function HomePage({ setMovie }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [movies, setMovies] = useState([]);

    // RETRIEVE the entire list of movies
    const loadMovies = async () => {
        const response = await fetch('/movies');
        const movies = await response.json();
        setMovies(movies);
    } 
    

    // UPDATE a single movie
    const onEditMovie = async movie => {
        setMovie(movie);
        redirect("/update");
    }


    // DELETE a single movie  
    const onDeleteMovie = async _id => {
        const response = await fetch(`/movies/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/movies');
            const movies = await getResponse.json();
            setMovies(movies);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the movies
    useEffect(() => {
        loadMovies();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <h2>List of Movies</h2>
            <p>Paragraph about this page.</p>
            <MovieList 
                movies={movies} 
                onEdit={onEditMovie} 
                onDelete={onDeleteMovie} 
            />
        </>
    );
}

export default HomePage;