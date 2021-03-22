"use strict";

// funcion para crear el grid
function newGrid(x, y){
    for (let i = 0; i < (x*y); i++){
        let gridEle = document.createElement('div');
        gridEle.className = 'cell';
        gridEle.innerHTML = '.';
        container.appendChild(gridEle);
    }
    container.style = ('height : 500px; width : 500px')
}

const body = document.querySelector('body');
const container = document.getElementById('container');

for(let i = 0; i < (16*16); i++){
    let gridEle = document.createElement('div');
    gridEle.className = 'cell';
    gridEle.innerHTML = '.';
    container.appendChild(gridEle);
}

const newGridBtn = document.createElement('button');
newGridBtn.innerHTML = 'New Grid'
newGridBtn.setAttribute ('id', 'btn');
body.prepend(newGridBtn);

newGridBtn.onclick = () => {
    container.textContent = '';
    let x = prompt('Row number:')
    let y = prompt('Column number:')
    newGrid(x, y);
}