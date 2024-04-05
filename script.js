let deg="";
function addToDisplay(value) {
    deg += value;
    document.getElementById('display').innerText = deg;
}

function calculate() {
    deg = eval(deg);
    document.getElementById('display').innerText = deg;
}

function clearDisplay() {
    deg = '';
    document.getElementById('display').innerText = deg;
}