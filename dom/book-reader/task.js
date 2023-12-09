const bookContent = document.querySelector('.book__content')
const bookControlFs = Array.from(document.querySelectorAll('.font-size'))

bookControlFs.forEach(function(elem) {
    elem.addEventListener("click", (event) => {
        event.preventDefault()
        if (bookContent.classList.length > 1) {
            bookContent.classList.remove(bookContent.classList[1])
            bookContent.classList.add(event.target.classList[1])
        } else {
            bookContent.classList.add(event.target.classList[1])
        }
    });
});