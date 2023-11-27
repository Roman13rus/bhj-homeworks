let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function checkGame(dead, lost) {
    console.log(dead, lost);
    if (dead == 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lost == 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
        };
        checkGame(dead.textContent, lost.textContent);
    };
};