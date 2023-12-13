const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));

tooltip.forEach(function(tool) {
    tool.addEventListener('click', (e) => {
        
        e.preventDefault();
        const toolold = Array.from(document.querySelectorAll('.tooltip'))
        for (let i of toolold) {
            if (i.classList.contains('tooltip_active')) {
                i.classList.remove('tooltip_active')
            }
        }
        const {left} = e.target.getBoundingClientRect();
        let div = document.createElement('div');
        div.className = "tooltip";
        div.textContent = tool.title;
        div.style.left = left + 'px'; 
        tool.insertAdjacentElement("beforeend", div);
        div.classList.add('tooltip_active');
    });
});