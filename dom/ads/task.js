
const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

let i = 0

let id = setTimeout(function rotate() { 
    rotatorCase[i % rotatorCase.length].classList.remove('rotator__case_active')
    rotatorCase[(i + 1) % rotatorCase.length].classList.add('rotator__case_active')
    rotatorCase[(i + 1) % rotatorCase.length].style.color = rotatorCase[(i + 1) % rotatorCase.length].dataset.color;
    let speed = rotatorCase[(i + 1) % rotatorCase.length].dataset.speed
    i += 1; 
    id = setTimeout(rotate, speed); 
}, 100);