let timer = document.getElementById('timer')
    let id = setInterval(() => {
        timer.textContent = Number(timer.textContent) -1
        if (timer.textContent == 0) {
            alert('Вы победили в конкурсе!')
            clearInterval(id)
        }
    }, 1000)