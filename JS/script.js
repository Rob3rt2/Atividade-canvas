const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

ctx.moveTo (10, 100);
ctx.lineTo (65,10);
ctx.lineTo (120,100);
ctx.fill();

ctx1.fillStyle = 'red';
ctx1.fillRect (60,20,170,120);
ctx1.strokeRect (80, 50, 130, 60);

ctx2.beginPath();
ctx2.arc(150,80,70,0, Math.PI*2,true);
ctx2.moveTo(100,200);
ctx2.fillStyle ='red';
ctx2.fill();



ctx3.beginPath();
ctx3.moveTo (400,50);
ctx3.lineTo (20,50);
ctx3.lineTo (170, 70);
ctx3.stroke();




