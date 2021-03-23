"use strict";

// funcion para crear el grid
function newGrid(x, y){
    if (x<100&&y<100){
        for (let i = 0; i < (x*y); i++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = '';
            container.appendChild(cell);
        }
    }
}

const body = document.querySelector('body');
const container = document.getElementById('container');

for(let i = 0; i < (16*16); i++){
    let gridEle = document.createElement('div');
    gridEle.className = 'cell';
    gridEle.innerHTML = '';
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