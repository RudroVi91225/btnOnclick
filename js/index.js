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
//step----6
const makeSalmon = document.getElementById('salmon');
makeSalmon.addEventListener('click', function () {
    document.body.style.backgroundColor = 'salmon';
}
)
//step----7
document.getElementById('light-blue').addEventListener('click',
    function () {
        document.body.style.backgroundColor = ' #8B0000'
    })
