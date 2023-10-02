

/**
 * @param {number} s
 * @param {vector3} c
 * generates points of a cube
 */
function generateCubePoints(s, c) {
	const vertices = [
		new Vector3(c.x - s / 2, c.y + s / 2, c.z - s / 2),
		new Vector3(c.x + s / 2, c.y + s / 2, c.z - s / 2),
    new Vector3(c.x - s / 2, c.y - s / 2, c.z - s / 2),
    new Vector3(c.x + s / 2, c.y - s / 2, c.z - s / 2),
    new Vector3(c.x - s / 2, c.y + s / 2, c.z + s / 2),
		new Vector3(c.x + s / 2, c.y + s / 2, c.z + s / 2),
		new Vector3(c.x - s / 2, c.y - s / 2, c.z + s / 2),
		new Vector3(c.x + s / 2, c.y - s / 2, c.z + s / 2),
  ];
	return vertices;
}

class Cube {
	constructor(size = 1, center = new Vector3(0, 0, 0)) {
		this.points = generateCubePoints(size, center);
		this.edges = [
			new Vector2(0, 1),
			new Vector2(1, 3),
			new Vector2(3, 2),
			new Vector2(2, 0),
			new Vector2(4, 5),
			new Vector2(5, 7),
			new Vector2(7, 6),
			new Vector2(6, 4),
			new Vector2(0, 4),
			new Vector2(1, 5),
			new Vector2(2, 6),
			new Vector2(3, 7),

		/*	new Vector2(1, 2),
			new Vector2(4, 7),
			new Vector2(0, 5),
			new Vector2(1, 7),
			new Vector2(2, 4),
			new Vector2(3, 6),*/

		]
		this.faces = [
			//front
			new Vector4(0, 1, 2, 0),
			new Vector4(1, 2, 3, 0),
			//back
			new Vector4(4, 5, 6, 0),
			new Vector4(5, 6, 7, 0),
			//top
			new Vector4(4, 5, 0, 0),
			new Vector4(5, 0, 1, 0),
			//bottom
			new Vector4(2, 3, 6, 0),
			new Vector4(3, 6, 7, 0),
			//left
			new Vector4(0, 2, 4, 0),
			new Vector4(2, 4, 6, 0),
			//right
			new Vector4(1, 3, 5, 0),
			new Vector4(3, 5, 7, 0),
		]
		this.faces.forEach(face => { face.w = Math.floor(Math.random() * 360) })
	}
	drawPoints(color) {
		this.points.forEach(point => {
			drawpoint(point.perspectiveProject(500));
		})
	}
	drawEdges() {
		this.edges.forEach(edge => {
			let p1 = this.points[edge.x].perspectiveProject(500)
			let p2 = this.points[edge.y].perspectiveProject(500)
			drawLine(p1, p2, 'white', 5);
		})
	}
	drawFaces() {
		this.faces.sort((a, b) => {
			return (this.points[b.x].z + this.points[b.y].z + this.points[b.z].z) - (this.points[a.x].z + this.points[a.y].z + this.points[a.z].z)
		})
		for (let i = 0; i < this.faces.length; i++) {
			let face = this.faces[i];
			let randcol = `hsl(${face.w},100%,50%)`
			drawTriangle(this.points[face.x].perspectiveProject(500), this.points[face.y].perspectiveProject(500), this.points[face.z].perspectiveProject(500), randcol);
		}
	}
	draw() {
		this.drawFaces();
		this.drawEdges();
		this.drawPoints();
		
	}
}


class Hypercube extends Cube {
	constructor(innerSize, outerSize, center = new Vector3(0, 0, 0)) {
		super();
		this.points = [...generateCubePoints(innerSize, center), ...generateCubePoints(outerSize, center)]
		this.edges = [
			new Vector2(0, 1),
			new Vector2(1, 3),
			new Vector2(3, 2),
			new Vector2(2, 0),
			new Vector2(4, 5),
			new Vector2(5, 7),
			new Vector2(7, 6),
			new Vector2(6, 4),
			new Vector2(0, 4),
			new Vector2(1, 5),
			new Vector2(2, 6),
			new Vector2(3, 7),

			new Vector2(8, 9),
			new Vector2(9, 11),
			new Vector2(11, 10),
			new Vector2(10, 8),
			new Vector2(12, 13),
			new Vector2(13, 15),
			new Vector2(15, 14),
			new Vector2(14, 12),
			new Vector2(8, 12),
			new Vector2(9, 13),
			new Vector2(10, 14),
			new Vector2(11, 15),

			new Vector2(0, 8),
			new Vector2(1, 9),
			new Vector2(2, 10),
			new Vector2(3, 11),
			new Vector2(4, 12),
			new Vector2(5, 13),
			new Vector2(6, 14),
			new Vector2(7, 15),
		]
	}
}

function secondMax(...args){
	let max = Math.max(...args);
	args.splice(args.indexOf(max),1);
	return Math.max(args);
}