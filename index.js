"use strict";

const container = document.getElementById('container');

for(let i = 0; i < (16*16); i++){
    let gridEle = document.createElement('div');
    gridEle.className = 'grid';
    gridEle.innerHTML = 'div';
    container.appendChild(gridEle);
}

