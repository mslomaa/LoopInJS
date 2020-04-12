const btn = document.querySelector('button')
const menuList = document.querySelector('ul');

let i = 1;

const addElement = function(){
    const liList = document.createElement('li');
    if (i <= 10) {
        menuList.appendChild(liList);
    }
    i++;
}

btn.addEventListener('click', addElement);

