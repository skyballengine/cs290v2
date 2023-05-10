window.onload = function () {
    debugger;

    // Create a node for an unordered list
    let newList = document.createElement('ul');

    // Create nodes for list items and add these nodes to the list node
    for (let i = 0; i < 3; i++) {
        let newItem = document.createElement('li');
        newItem.textContent = 'I am Item ' + i;
        newList.appendChild(newItem);
    }

    // Add the list node to the DOM tree by appending it to the element with id listContainer
    document.getElementById('listContainer').appendChild(newList);

    newList.children[0].style.backgroundColor = 'red';
    newList.children[1].style.backgroundColor = 'green';
    newList.children[2].style.backgroundColor = 'violet';

    newList.children[1].className = 'bigger';
    newList.children[1].className += ' yellow';

    // Uncomment the following block of code to remove a child node
    // and see how the childElementCount goes down when a child
    // node is removed.
    /*
    console.log(newList.childElementCount);
    newList.removeChild(newList.children[1]);
    console.log(newList.childElementCount);
    */
}