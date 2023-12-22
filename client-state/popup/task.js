const popUpClose = document.querySelector('.modal__close')
const modal = document.getElementById('subscribe-modal')

function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}
function getCookie (name) {
    const pair = document.cookie.split('; ')
    const cook = pair.find(a => a.startsWith(name + '='))
    return cook.substring(name.length + 1)
}

window.addEventListener('DOMContentLoaded', () => {
    if (document.cookie.indexOf('popup') == -1) {
        modal.classList.add('modal_active')
        setCookie('popup', 'open')
    }
})

popUpClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
 })

 