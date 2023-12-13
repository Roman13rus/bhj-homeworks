const taskList = document.getElementById('tasks__list')
const form = document.forms.tasks__form
const input = form.elements.task__input
const btn = form.elements.tasks__add


btn.addEventListener('click', (e) => {
    e.preventDefault();
    let div = document.createElement('div');
        div.className = "task";
        div.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
        taskList.insertAdjacentElement("beforeend", div);
        input.value = ''
        const delElem = div.querySelector('.task__remove')
        delElem.onclick = function() {
            div.remove()
        }

})

