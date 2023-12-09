const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

let i = 1
setInterval(() => {
    rotatorCase[i].classList.add('rotator__case_active')
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
}, 1000);

