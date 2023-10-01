/**
 * @param {Vector2} point
 * @param {String} color
 * draws a Vector2 onto canvas
 */
function drawpoint(point,color = 'white'){
	ctx.beginPath();
	ctx.arc(point.x,point.y,10,0,2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(p1,p2,color = 'white',width = 2){
	ctx.beginPath();
	ctx.moveTo(p1.x,p1.y);
	ctx.lineTo(p2.x,p2.y);
	ctx.strokeStyle = color;
	ctx.lineWidth = width;
	ctx.stroke();
	
}

function clear(){
	ctx.fillStyle = 'black';
	ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}

function drawTriangle(p1,p2,p3,color = 'white'){
	ctx.beginPath()
	ctx.moveTo(p1.x,p1.y);
	ctx.lineTo(p2.x,p2.y);
	ctx.lineTo(p3.x,p3.y);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

