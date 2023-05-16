'use strict';
// debugger;

function populateRow(data) {
    const tableBodyElement = document.getElementById('random-person-data');
        let newRow = document.createElement('tr');
        tableBodyElement.appendChild(newRow);
        let data1 = document.createElement('td');
        newRow.appendChild(data1);
        data1.innerHTML += `<img src="${data.picture.thumbnail}">`
        let data2 = document.createElement('td');
        newRow.appendChild(data2);
        data2.innerHTML += `<a href="mailto:${data.email}">
                            ${data.name.first} 
                            ${data.name.last}</a>
                            `;
        let data3 = document.createElement('td');
        newRow.appendChild(data3);
        data3.innerHTML += `${data.phone}`;
        let data4 = document.createElement('td');
        newRow.appendChild(data4);
        data4.innerHTML += `${data.location.city}`;
        
    }


async function callRandomUserServer(event) {
    event.preventDefault();
    console.log('Sending request to server for person data');
    const targetId = event.target.getAttribute('id');
    const url = targetId === 'browser' ? "https://randomuser.me/api/" 
                : "/random-person";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status == 200) {
            populateRow(data.results[0]);
            console.log(data)
        }
    } catch (err) {
        console.error(err);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const browserButton = document.getElementById('browser');
    browserButton.addEventListener('click', callRandomUserServer);
    const expressButton = document.getElementById('express');
    expressButton.addEventListener('click', callRandomUserServer);
})