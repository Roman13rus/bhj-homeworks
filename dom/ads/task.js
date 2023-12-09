
const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

let i = 1
let getSpeed = function() {
    let speed = rotatorCase[i].dataset.speed
    if (i == rotatorCase[rotatorCase.length - 1]) {
        i = 0  
    } else {
        i++
    }
    return speed
}

let rotate = function() {
    rotatorCase[i].classList.add('rotator__case_active')
    rotatorCase[i].style.color = rotatorCase[i].dataset.color;
    if (i == 0) {
        rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active')
        i += 1
    } else if (i == rotatorCase.length - 1) {
        rotatorCase[i - 1].classList.remove('rotator__case_active')
        i = 0
    } else {
        rotatorCase[i - 1].classList.remove('rotator__case_active')
        i += 1
    }
}
setInterval(rotate, getSpeed());