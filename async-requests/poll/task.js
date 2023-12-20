const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll'
const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        let question = JSON.parse(xhr.response).data
        const questionHTML = document.getElementById("poll__title")
        const answerHTML = document.getElementById('poll__answers')
        questionHTML.textContent = question.title
    
    for (let answer of question.answers) {
        let btn = document.createElement('button')
        btn.className = 'poll__answers'
        btn.textContent = answer
        btn.setAttribute('onclick', 'openelement()')
        answerHTML.append(btn)
        }
    }
})
const main = document.querySelector('.content')
let openelement = function() {
    let dialog = document.createElement('dialog');
    dialog.id = 'newelement'
    dialog.innerHTML = `<p>Ваш ответ засчитан</p><p><button id="close" onclick = 'closeElement()'>Закрыть</button></p>`;
    main.append(dialog);
    dialog.show()
}

let closeElement = function() {
    let dialog = document.getElementById('newelement')
    dialog.close()
    dialog.remove()
}


xhr.open('GET', requestURL)
xhr.send()
 
