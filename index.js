"use strict";

// funcion para crear el grid
function newGrid(x){
    container.textContent = '';
    if (x<100){
        for(let i = 0; i < (x*x); i++){
            let gridEle = document.createElement('div');
            gridEle.className = 'newcell';
            gridEle.innerHTML = '';
            let brightness = 100;
            gridEle.onmouseover = ()=> {
                brightness -= 10;
                if (brightness < 0){
                    brightness = 0;
                }
                let color = `rgb(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`
                console.log(color)
                gridEle.style.setProperty(
                    'background-color',
                    `${color}`
                );
                gridEle.style.setProperty(
                    'color',
                    `${color}`
                );
                gridEle.style.setProperty(
                    'filter',
                    `brightness(${brightness}%`
                );
            }
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

const newGridBtn = document.createElement('button');
newGridBtn.innerHTML = 'New Grid'
newGridBtn.setAttribute ('id', 'btn');
body.prepend(newGridBtn);


newGridBtn.onclick = () => {
    newGrid(ask());
}


newGrid(16);
