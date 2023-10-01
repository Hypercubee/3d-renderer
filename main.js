const canvas = document.querySelector('#canvas');
canvas.width = 1024;
canvas.height = 576;
const ctx = canvas.getContext('2d');
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(1, -1);


// Generate the cube points
const cubePoints = generateCubePoints(50, { x: 0, y: 0, z: 0 });
const cube = new Hypercube(80, 160, new Vector3(0, 0, 0));




function anim() {
	requestAnimationFrame(anim);
	running = true;
	clear();
	
	cube.points.forEach(point => {
		rotate3d(point, new Vector3(0, 0, 0), new Vector3(0.01, 0.005, 0.002))
	})
	cube.drawEdges();
	cube.drawFaces();
}


let running = false
window.onclick = () => {
	if (!running) anim();
};