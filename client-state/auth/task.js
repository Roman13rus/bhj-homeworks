const form = document.forms.signin__form;
const btn = document.getElementById('signin__btn');
const signURL = 'https://students.netoservices.ru/nestjs-backend/auth';
const formDiv = document.getElementById('signin');
const welcomeDiv = document.getElementById('welcome');
const main = document.querySelector('.content');

if (getUserID()) { // проверка на наличие userID в localstorage
    formDiv.classList.remove('signin_active');
    welcomeDiv.children[0].textContent = getUserID();
    welcomeDiv.classList.add('welcome_active');
} else {
    form.addEventListener('submit', (e) => {   // обработчик события загрузки
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', signURL);
    
        xhr.onload = function() {   // обработчик сщбытия загрузки и получения ответа
            let response = JSON.parse(xhr.response);
            console.log(response.success);
            if (response.success) {
                formDiv.classList.remove('signin_active');
                welcomeDiv.children[0].textContent = response.user_id;
                localStorage.setItem('userID', response.user_id);
                welcomeDiv.classList.add('welcome_active');
            } else {
                let dialog = document.createElement('dialog');
                dialog.id = 'newelement';
                dialog.innerHTML = `<p>Неправильный логин или пароль</p><p><button id="close" onclick = 'closeElement()'>Закрыть</button></p>`;
                main.append(dialog);
                dialog.show();
            };
        };
    
        xhr.upload.onerror = function() {   // обработчик события ошибки при загрузке формы на сервер
            let dialog = document.createElement('dialog');
            dialog.id = 'newelement';
            dialog.innerHTML = `<p>Произошла ошибка загрузки на сервер</p><p><button id="close" onclick = 'closeElement()'>Закрыть</button></p>`;
            main.append(dialog);
            dialog.show();
        };
        let formData = new FormData(form);
        xhr.send(formData);
    });
};

function closeElement() {//функция кнопки закрытия формы при неудачных попытках
    let dialog = document.getElementById('newelement');
    dialog.close();
    dialog.remove();
    form.reset();
};

function getUserID() {//функция извлечения  данных из хранилища
    return localStorage.getItem('userID');
};