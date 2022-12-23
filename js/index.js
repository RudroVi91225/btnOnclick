//step----2
function backgroundRed() {
    document.body.style.backgroundColor = 'red';
}
//step----3
const makeBlue = document.getElementById('blue');
makeBlue.onclick = backgroundBlue;

function backgroundBlue() {
    document.body.style.backgroundColor = 'blue';

}
//step----4
const makeOrange = document.getElementById('orange');
makeOrange.onclick = function backgroundOrange() {
    document.body.style.backgroundColor = 'orange';
}
//step----5
const makeGreen = document.getElementById('green');
makeGreen.addEventListener('click', backgroundGreen);
function backgroundGreen() {
    document.body.style.backgroundColor = 'green';
}

