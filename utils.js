
/**
 * @param {Vector3} p
 * @param {vector3} center
 * @param {number} angle
 * rotates a vector3 around a center x axis by angle
 */
function rotateX(p, center, angle) {
	let a = Math.atan2(p.z - center.z, p.y - center.y)
	let dis = Math.hypot(p.z - center.z, p.y - center.y)
	p.z = center.z + Math.sin(a + angle) * dis;
	p.y = center.y + Math.cos(a + angle) * dis;
}

/**
 * @param {Vector3} p
 * @param {vector3} center
 * @param {number} angle
 * rotates a vector3 around a center y axis by angle
 */
function rotateY(p, center, angle) {
	let a = Math.atan2(p.x - center.x, p.z - center.z)
	let dis = Math.hypot(p.x - center.x, p.z - center.z)
	p.x = center.x + Math.sin(a + angle) * dis;
	p.z = center.z + Math.cos(a + angle) * dis;
}

/**
 * @param {Vector3} p
 * @param {vector3} center
 * @param {number} angle
 * rotates a vector3 around a center z axis by angle
 */
function rotateZ(p, center, angle) {
	let a = Math.atan2(p.x - center.x, p.y - center.y)
	let dis = Math.hypot(p.x - center.x, p.y - center.y)
	p.x = center.x + Math.sin(a + angle) * dis;
	p.y = center.y + Math.cos(a + angle) * dis;
}
/**
 * @param {Vector3} p
 * @param {Vector3} center
 * @param {Vector3} angle
 * rotates a vector3 around a center z axis by angle
 */
function rotate3d(p, center, angle = new Vector3(0, 0, 0)) {
	rotateX(p, center, angle.x);
	rotateY(p, center, angle.y);
	rotateZ(p, center, angle.z);
}


