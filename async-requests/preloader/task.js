const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const preload = document.getElementById('loader');
const items = document.getElementById('items');

xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
   
    if (xhr.readyState == xhr.DONE) {
        preload.classList.remove('loader_active');
        let valute = xhr.response.response.Valute;
        for (let key in valute) {
            let div = document.createElement('div');
            div.className = "item";
            div.innerHTML = `<div class="item__code">${valute[key]["CharCode"]}</div><div class="item__value">${valute[key]["Value"]}</div><div class="item__currency">руб.</div>`;
            items.append(div);
        };      
    };
});

xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.send();
