'use strict';

async function showPersonData(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        populateRows(data);
    } catch (error) {
        console.log(error);
    }
}

function populateRows() {
    const tableElement = document.getElementById('tbody');
    for (let i = 0; i < 4; i++) {
        let newRow = document.createElement('tr');
        tableElement.appendChild(newRow);
        let cell1 = document.createElement('td');
        newRow.appendChild(cell1);
        cell1.innerText = "hello";
        let cell2 = document.createElement('td');
        newRow.appendChild(cell2);
        cell2.innerText = "hello";
        let cell3 = document.createElement('td');
        newRow.appendChild(cell3);
        cell3.innerText = "hello";
        let cell4 = document.createElement('td');
        newRow.appendChild(cell4);
        cell4.innerText = "hello";
        
    }
}
function callServer(event) {
    event.preventDefault();
    console.log('Sending request to server for person data')
    showPersonData()
}

document.addEventListener('DOMContentLoaded', () => {
    const browserButton = document.getElementById('browser');
    browserButton.addEventListener('submit', populateRows);
    // const expressButton = document.getElementById('express');
    // button2.addEventListener('submit', showPersonData);
})