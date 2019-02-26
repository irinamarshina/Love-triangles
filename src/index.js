/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var result = 0;
	const arr = []; console.log (preferences.length);
	for(var i = 0; i < preferences.length; i++) {

		const a = preferences[i];
		const b = preferences[a - 1];
		const c = preferences[b - 1]; 
		if (c-1 == i && a != b && b != c && c != a && !arr.includes(a) && !arr.includes(b) && !arr.includes(c)) {
			result++;
			arr.push(a, b, c);
		}
	}
	return result;
}