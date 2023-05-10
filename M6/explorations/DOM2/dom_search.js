window.onload = function() {
    let elements = document.getElementsByClassName('make-me-red');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.color = 'red';
    }
    elements = document.getElementsByTagName('button');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.borderRadius = '10px';
    }

    document.getElementById('best').style.backgroundColor = 'pink';
}

