const reveals = Array.from(document.querySelectorAll('.reveal'))

for (let reveal of reveals) {
    window.addEventListener('scroll', () => {
        const {top, bottom} = reveal.getBoundingClientRect()
    if (bottom < 0) {
        reveal.classList.remove('reveal_active')
    }

    if (top > window.innerHeight) {
        reveal.classList.remove('reveal_active')
    }
    reveal.classList.add('reveal_active')
    })
}