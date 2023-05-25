import React, { useState } from 'react';
import StaffRow from '../components/StaffRow';

function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setResults(response.results);
        })
        .catch(() => {
            alert('Random User Generator Server not responding.')
        });
    };
    return (
        <>
        <h2>Staff</h2>
        <article>
            <p>
                <button id="fromServer" onClick={fetchResults} value="add">Add</button>
                &nbsp; Add Ten Staff Members From The 
                <a href="https://randomuser.me/" alt='random user generator api'> Random User API</a>
            </p>
            <h3>Results:</h3>
            <table>
                <caption>Name, Email, Phone, and City</caption>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name &amp; Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((person, index) => <StaffRow person={person} key={index} />)}
                </tbody>
            </table>
        </article>
        </>
        )
};

export default StaffPage;
