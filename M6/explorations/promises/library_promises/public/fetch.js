'use strict'

function addData(data) {
    const p = document.createElement('p');
    p.textContent = data;
    p.style.backgroundColor = 'aqua';    
    const xhrdata = document.getElementById('data');
    xhrdata.appendChild(p);
}

function getData(url) {
    return fetch(url)
        // pipeline of promises
        .then(response => response.text())
        .then(data => addData(data))
        .catch(error => console.error(error));
}

/*
* Handler for form submission. Prevents the default action and calls longop() 2 times
*/
function callServer(event) {
    event.preventDefault();
    console.log('Sending request to server with index=1');
    getData('/longop?index=1');
    console.log('Sending request to server with index=2');
    getData('/longop?index=2');
}

/*
* Add event listener on form submission
*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('serverform');
    form.addEventListener('submit', callServer);
});