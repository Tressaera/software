
let buttons = document.querySelectorAll('.copy-btn');

[...buttons].forEach(button=>{
 button.addEventListener('click', (e)=> {
    let input = document.createElement('input');
    input.setAttribute('value', e.target.dataset.text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
    e.target.classList.add('copied');
    e.target.addEventListener('mouseLeave' , (e)=> e.target.classList.removed('copied'));
 });
})