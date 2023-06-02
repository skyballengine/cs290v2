import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMoviePage = ({ movieToEdit }) => {
 
    const [title, setTitle]       = useState(movieToEdit.title);
    const [year, setYear]         = useState(movieToEdit.year);
    const [language, setLanguage] = useState(movieToEdit.language);
    
    const redirect = useNavigate();

    const editMovie = async () => {
        const response = await fetch(`/movies/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`document edited`);
        } else {
            const errMessage = await response.json();
            alert(`document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a movie in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which movie are you adding?</legend>
                    <label for="title">Movie title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        onClick={editMovie}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditMoviePage;