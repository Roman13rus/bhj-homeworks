let textArea = document.getElementById('editor')

textArea.addEventListener('click', () => {
    textValue = textArea.value
    localStorage.setItem('text', textValue)
})

window.addEventListener('DOMContentLoaded', () => {
    textArea.value = localStorage.getItem('text')
})