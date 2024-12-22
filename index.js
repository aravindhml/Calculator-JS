const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    try {
        display.value = "";
    }
    catch (error) {
        display.value = "error"
    }
}