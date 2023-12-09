const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        let itemNewMenu = Number(tabs.indexOf(event.target))
        
        for (let item of tabs) {
            if (item.classList.contains('tab_active')) {
            item.classList.remove('tab_active');
            };
        };
        for (let content of contents) {
            if (content.classList.contains('tab__content_active')) {
                content.classList.remove('tab__content_active');
            };
        };
        tabs[itemNewMenu].classList.add('tab_active');
        contents[itemNewMenu].classList.add('tab__content_active');

    });
});