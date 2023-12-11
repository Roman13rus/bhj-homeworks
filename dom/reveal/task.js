const reveals = Array.from(document.querySelectorAll('.reveal'))


window.addEventListener('scroll', () => {
        
    for (let reveal of reveals) {
        const {top, bottom} = reveal.getBoundingClientRect()
        if (top < window.innerHeight && bottom > 0) {
            reveal.classList.add('reveal_active')
        } else {reveal.classList.remove('reveal_active')}
    }
    })