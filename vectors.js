class Vector2 {
	#vars = [];
	/**
	 * @param {number} x
	 * @param {number} y
	 * creates a 2d vector object
	 */
	constructor(x, y) {
		this.set(x,y)
	}
	set x(x) {
		if (x !== undefined) this.#vars[0] = x;
		else console.warn('missing argument in vector2x')
	}
	get x() {
		return this.#vars[0];
	}
	set y(y) {
		if (y !== undefined) this.#vars[1] = y;
		else console.warn('missing argument in vector2y')
	}
	get y() {
		return this.#vars[1];
	}
	/**
	 * @param {number} x
	 * @param {number} y
	 * sets the 2d vector
	 */
	set(x, y) {
		this.x = x;
		this.y = y;
	}
}


class Vector3 {
	#vars = [];
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * creates a 3d vector object
	 */
	constructor(x, y, z) {
		this.set(x,y,z);
	}
	set x(x) {
		if (x !== undefined) this.#vars[0] = x;
		else console.warn('missing argument in vector3x')
	}
	get x() {
		return this.#vars[0];
	}
	set y(y) {
		if (y !== undefined) this.#vars[1] = y;
		else console.warn('missing argument in vector3y')
	}
	get y() {
		return this.#vars[1];
	}
	set z(z) {
		if (z !== undefined) this.#vars[2] = z;
		else console.warn('missing argument in vector3z')
	}
	get z() {
		return this.#vars[2];
	}
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * sets a 3d vector object
	 */
	set(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}




	/**
	 * @param {number} projectionPlaneZ - z 
	 * projects a 3d point onto 2d plane
	 */
	perspectiveProject(projectionPlaneZ) {
		const z = projectionPlaneZ
		return new Vector2((z * this.x) / (z + this.z), (z * this.y) / (z + this.z));
	}
	project(){
		return new Vector2(this.x,this.y);
	}
}


class Vector4 {
	#vars = [];
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} w
	 * creates a 4d vector object
	 */
	constructor(x, y, z, w) {
		this.set(x,y,z,w)
	}
	set x(x) {
		if (x !== undefined) this.#vars[0] = x;
		else console.warn('missing argument in vector4x')
	}
	get x() {
		return this.#vars[0];
	}
	set y(y) {
		if (y !== undefined) this.#vars[1] = y;
		else console.warn('missing argument in vector4y')
	}
	get y() {
		return this.#vars[1];
	}
	set z(z) {
		if (z !== undefined) this.#vars[2] = z;
		else console.warn('missing argument in vector4z')
	}
	get z() {
		return this.#vars[2];
	}
	set w(w) {
		if (w !== undefined) this.#vars[3] = w;
		else console.warn('missing argument in vector4w')
	}
	get w() {
		return this.#vars[3];
	}
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {number} w
	 * sets a 4d vector object
	 */
	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w
	}
}