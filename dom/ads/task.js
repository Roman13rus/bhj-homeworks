
const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

let i = 0

let id = setTimeout(function rotate() { // запускаем наш stTimeout с интервалом 500мл
    rotatorCase[i % rotatorCase.length].classList.remove('rotator__case_active')
    rotatorCase[(i + 1) % rotatorCase.length].classList.add('rotator__case_active')
    rotatorCase[(i + 1) % rotatorCase.length].style.color = rotatorCase[(i + 1) % rotatorCase.length].dataset.color;
    let speed = rotatorCase[(i + 1) % rotatorCase.length].dataset.speed
    i += 1; // тут выполняются действия
    id = setTimeout(rotate, speed); // замещаем id новым setTimeout который ждет когда выполнится код выше, ждет пол секунды и опять выполняет функцию log
}, 100);