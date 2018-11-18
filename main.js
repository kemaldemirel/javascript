'use strict'

function addText(e){
    e.preventDefault();

    let li = document.createElement('li');

    li.textContent = text.value;

    list.appendChild(li);

    text.value = "";

    li.addEventListener('click', removeLi);
}

function removeLi(e){
    let conf = confirm("Вы действительно хотите удалить элемент?");

    if(conf){
        list.removeChild(e.target);
    }else{
        return false
    };
}

let text = document.querySelector("#text"),
    btn = document.querySelector("#btn"),
    list = document.querySelector("#main-list");


btn.addEventListener('click', addText);






