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

function onDraw(event){
    // console.log(event);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', onDraw);