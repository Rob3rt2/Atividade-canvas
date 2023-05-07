const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 =canvas2.getContext('2d');

ctx.moveTo (20, 20);
ctx.lineTo (200,150);
ctx.lineTo (20,150);
ctx.fill();

ctx1.fillStyle = 'red';
ctx1.fillRect (20,20,170,120);
ctx1.strokeRect (40, 50, 130, 60);







