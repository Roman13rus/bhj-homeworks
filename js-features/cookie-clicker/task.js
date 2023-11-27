let cookie = document.getElementById('cookie')
let clicker = document.getElementById('clicker__counter')
let clicker__speed = document.getElementById('clicker__speed__counter')

cookie.onclick = () => {
    
    let start = performance.now();
    if (Number(clicker.textContent) %2 == 0) {
        cookie.width += 20
        cookie.height +=20 
    } else {
        cookie.width -= 20
        cookie.height -= 20  
    }
    clicker.textContent = Number(clicker.textContent) + 1
    let countClick = 1 / (performance.now() - start);
    clicker__speed.textContent = countClick.toFixed(2)
}

