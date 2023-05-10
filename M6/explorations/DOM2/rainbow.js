window.onload = function () {
    let currentNode = document.body;
    // Start the debugger
    debugger;
    // The background of the body will be set to red
    currentNode.style.backgroundColor = 'red';

    // Go down the tree to the first element node, which is the h1 heading
    currentNode = currentNode.firstElementChild;
    currentNode.style.backgroundColor = 'orange';

    // Move sideways to the next sibling of h1, which is the p node with text node "Hello, I am Nauman ..."
    currentNode = currentNode.nextElementSibling;
    currentNode.style.backgroundColor = 'yellow';

    // Move sideways to the next sibling which is the p node with 3 child nodes.
    currentNode = currentNode.nextElementSibling;

    // Go down the tree to the first element child, which is the a element.
    currentNode = currentNode.firstElementChild;
    currentNode.style.backgroundColor = 'green';
}