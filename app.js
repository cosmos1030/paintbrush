const range = document.querySelector('#range');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const download = document.querySelector('#download');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(25,25);
// ctx.lineTo(100,100);
// ctx.strokeStyle = 'red';
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(100,50);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

ctx.lineWidth = range.value;

let clicked = false;

function onDraw(event){
    // console.log(event);
    // ctx.moveTo(event.offsetX, event.offsetY);
    if(clicked){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
    }
    else {
        ctx.moveTo(event.offsetX, event.offsetY);
    }
    
}

function onMousedown(event){
    clicked = true;
}

function onMouseup(event) {
    clicked =false;
}

function onChangethickness(event) {
    // console.log(range.value);
    ctx.beginPath();
    ctx.lineWidth = range.value;
}

function onChangecolor(event) {
    ctx.beginPath();
    ctx.strokeStyle = color.value;
}

function onCheckeraser(event) {
    console.log(eraser.checked);
    if (eraser.checked){
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = range.value;
    } else{
        onChangecolor();
        onChangethickness();
    }
}

function onDownload(event) {
    // console.log(canvas.toDataURL());
    event.target.href = canvas.toDataURL();
}

canvas.addEventListener('mousemove', onDraw);
canvas.addEventListener('mousedown', onMousedown);
canvas.addEventListener('mouseup', onMouseup);
range.addEventListener('change', onChangethickness);
color.addEventListener('change', onChangecolor);
eraser.addEventListener('change', onCheckeraser);
download.addEventListener('click', onDownload);