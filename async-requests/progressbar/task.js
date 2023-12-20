const form = document.forms.form
const loadURL = 'https://students.netoservices.ru/nestjs-backend/upload'
let progressBar = document.getElementById('progress')
const main = document.querySelector('.content')


form.addEventListener('submit', (e) => { // обработчик события загрузки
    e.preventDefault()
    const xhr = new XMLHttpRequest();

    xhr.open('POST', loadURL);

    xhr.upload.onprogress = function(e) { // обработчик события прогрессбара
        progressBar.value = e.loaded / e.total
    };
 
    xhr.upload.onload = function() { // обработчик события успешной полной загрузки
        let dialog = document.createElement('dialog');
        dialog.id = 'newelement'
        dialog.innerHTML = `<p>Данные успешно загружены на сервер</p><p><button id="close" onclick = 'closeElement()'>Закрыть</button></p>`;
        main.append(dialog);
        dialog.show();
    };
        

    xhr.upload.onerror = function() { // обработчик события ошибки при загрузке
        let dialog = document.createElement('dialog');
        dialog.id = 'newelement'
        dialog.innerHTML = `<p>Произошла ошибка загрузки на сервер</p><p><button id="close" onclick = 'closeElement()'>Закрыть</button></p>`;
        main.append(dialog);
        dialog.show();
    };
      
    let formData = new FormData(form)
    xhr.send(formData);
});

let closeElement = function() { // удаление сообщения из структуры документа об результатах загрузки
    let dialog = document.getElementById('newelement')
    progressBar.value = 0
    dialog.close();
    dialog.remove();
    };