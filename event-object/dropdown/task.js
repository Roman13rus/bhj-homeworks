const list = document.querySelector('.dropdown__list');
// const dropDown  = document.querySelector('.dropdown');
const dropItems = document.querySelectorAll('.dropdown__item');
let dropdownValue = document.querySelector('.dropdown__value');
const listClk = () => {
    list.classList.add('dropdown__list_active');
}

dropdownValue.addEventListener('click', listClk);

dropItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        dropdownValue.textContent = item.textContent
        list.classList.remove('dropdown__list_active')
    });
});
