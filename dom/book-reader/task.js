const bookContent = document.querySelector('.book__content')
const bookControlFs = Array.from(document.querySelectorAll('.font-size'))
const bookControlColor = Array.from(document.querySelectorAll('.color'))
textColor = new Array()
bgColor = new Array()

bookControlFs.forEach(function(elem) {
    elem.addEventListener("click", (event) => {
        event.preventDefault()
        if (bookContent.classList.length > 1) {
            bookContent.classList.remove(bookContent.classList[1])
            bookContent.classList.add(event.target.classList[1])
        } else {
            bookContent.classList.add(event.target.classList[1])
        }
        for (i of bookControlFs) {
            if (i.classList.contains('font-size_active')) {
                i.classList.remove('font-size_active')
            }
        }
        elem.classList.add('font-size_active')
    });
});


bookControlColor.forEach(function(elem) {
    if (elem.hasAttribute('data-text-color')) {
        textColor.push(elem)
    } else if (elem.hasAttribute('data-bg-color')) {
        bgColor.push(elem)
    }
});


textColor.forEach(function(elemTx) {
    elemTx.addEventListener("click", (event) => {
        event.preventDefault()
        bookContent.style.color = event.target.dataset.textColor
        for (i of textColor) {
            if (i.classList.contains('color_active')) {
                i.classList.remove('color_active')
            }
        }
        elemTx.classList.add('color_active')
    });
});

bgColor.forEach(function(elemBg) {
    elemBg.addEventListener("click", (event) => {
        event.preventDefault()
        bookContent.style.backgroundColor = event.target.dataset.bgColor
        for (i of bgColor) {
            if (i.classList.contains('color_active')) {
                i.classList.remove('color_active')
            }
        }
        elemBg.classList.add('color_active')
    });
});