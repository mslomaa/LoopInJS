const btn = document.querySelector('button')
const menuList = document.querySelector('ul');

let i = 1;
let j = 7;

const addElement = function(){
    const liList = document.createElement('li');
    if (i <= 10) {
        menuList.appendChild(liList);
        liList.innerHTML += 'element ' + i;
    }
    i++;
    
    if (i > 10) {
       menuList.style.fontSize = j + 'px';
    }
    j++;
}

btn.addEventListener('click', addElement);

