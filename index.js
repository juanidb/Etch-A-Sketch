"use strict";

// funcion para crear el grid
function newGrid(x){
    container.textContent = '';
    if (x<100){
        for(let i = 0; i < (x*x); i++){
            let gridEle = document.createElement('div');
            gridEle.className = 'cell';
            gridEle.innerHTML = '';
            container.appendChild(gridEle);
            container.style.setProperty(
                'grid-template-columns',
                `repeat(${x}, 2fr)`
            );
            container.style.setProperty(
                'grid-template-rows',
                `repeat(${x}, 2fr)`
            );
        }
    } else {
        alert('Number must be below 100.')
        newGrid(ask());
    }
}

function ask() {
    let num = prompt( 'New size:');
    return num
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
    newGrid(ask());
}