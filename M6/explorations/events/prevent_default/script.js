debugger;
function registerHandlers() {
    function buttonHolderDivClick(event) {
        document.getElementById("buttonClickOutput").textContent = "I am the click handler at the Button Holder Div";
    }

    function nestedButtonClick(event) {
        document.getElementById("buttonClickOutput").textContent = "I am the click handler at the Nested Button";
        if (document.getElementById("stopPropagationCheckbox").checked) {
            event.stopPropagation();
        }
    }

    function defaultOrNotClick(event) {
        document.getElementById("defaultOrNotClickOutput").textContent = `Checkbox was clicked at ${(new Date()).getTime()}`;
        if (document.getElementById("preventDefaultCheckbox").checked) {
            event.preventDefault();
        }
    }

    document.getElementById("defaultOrNotCheckbox").addEventListener("click", defaultOrNotClick);
    document.getElementById("nestedButton").addEventListener("click", nestedButtonClick);
    document.getElementById("buttonHolderDiv").addEventListener("click", buttonHolderDivClick);
}

document.addEventListener("DOMContentLoaded", registerHandlers);