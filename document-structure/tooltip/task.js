const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));

tooltip.forEach(function(tool) {
    let div = document.createElement('div');
    div.className = "tooltip";
    div.textContent = tool.title;
    tool.insertAdjacentElement("afterend", div);
    tool.addEventListener('click', (e) => {
        e.preventDefault();
        let toolold = Array.from(document.querySelectorAll('.tooltip'));
        let cart = toolold.find(item => item.classList.contains('tooltip_active'));
        if (cart) {
            cart.classList.remove('tooltip_active');
        } else {
            let div = e.target.nextElementSibling
            const {left} = e.target.getBoundingClientRect();
            div.style.left = left + 'px'
            div.classList.add('tooltip_active');
        }
    });
});