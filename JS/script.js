const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');




ctx.moveTo (10, 100);
ctx.lineTo (65,10);
ctx.lineTo (120,100);
ctx.fill();

ctx1.fillStyle = 'red';
ctx1.fillRect (60,20,170,120);
ctx1.strokeRect (80, 50, 130, 60);

ctx2.beginPath();
ctx2.arc(150,80,70,0, Math.PI *2,false);
ctx2.moveTo(100,200);
ctx2.fillStyle ='red';
ctx2.fill();



ctx3.beginPath();
ctx3.moveTo (400,50);
ctx3.lineTo (20,50);
ctx3.lineTo (170, 70);
ctx3.stroke();


ctx4.beginPath();
ctx4.moveTo(100,69);
ctx4.quadraticCurveTo(30,20,100,0);
ctx4.quadraticCurveTo(40,10,0,30);
ctx4.quadraticCurveTo(10,120,100,69);
ctx4.quadraticCurveTo(300,40,99,00);
ctx4.stroke();

draw();

function draw() {
	var ctx5 = document.getElementById('canvas5').getContext('2d');
	var img = new Image();
	img.onload = function(){
		for (var i = 0; i< 1; i++){
			for (var j = 0; j<1; j++){
				ctx5.drawImage(img,j*700, i *700,300 , 200);
			}
		}
	};
	img.src = 'IMG/imagem.png';
}
	





