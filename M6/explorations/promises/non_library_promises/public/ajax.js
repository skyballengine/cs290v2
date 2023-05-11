'use strict'

function addData(data) {
    const p = document.createElement('p');
    p.textContent = data;
    p.style.backgroundColor = 'aqua';
    const xhrdata = document.getElementById('data');
    xhrdata.appendChild(p);
}

function getData(url, async) {
    // Create request object
    const xhr = new XMLHttpRequest();

    // Initialize the request
    // If asynch is true, the request will be sent asynchrnonously,
    // otherwise the request will be sent synchronously
    xhr.open('GET', url, async);

    // Add event listeners
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            addData(xhr.responseText);
        } else {
            console.log(`${xhr.status}: ${xhr.statusText}`);
        }
    });
    xhr.addEventListener('error', event => console.log('Network error'));

    // From MDN doc on the send() method
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    //      Sends the request. If the request is asynchronous(which is the default), 
    //      this method returns as soon as the request is sent.
    xhr.send();
}

/*
* Handler for form submission. Prevents the default action and calls longop() 2 times
*/
function callServer(event) {
    event.preventDefault();
    // Get value of the checkbox that decides whether to send the request
    // synchronously or asynchronously
    const async = document.getElementById('async').checked;
    console.log('Sending request to server with index=1 and aynch = ' + async);
    getData('/longop?index=1', async);
    console.log('Sending request to server with index=2 and aynch = ' + async);
    getData('/longop?index=2', async);
}

/*
* Add event listener on form submission
*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('serverform');
    form.addEventListener('submit', callServer);
});