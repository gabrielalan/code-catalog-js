
/**
 * Binary search method used in a array
 * Can be curried like this: 
 * const findInArray = arrayBinarySearch.bind(null, []);
 */
function arrayBinarySearch(array, element) {
	let begin = 0;
	let end = array.length - 1;
	
	while(begin <= end) {
		let middle = Math.round((end + begin) / 2);
		let current = array[middle];

		if (current < element) 
			begin = middle + 1;

		else if (current > element)
			end = middle - 1;

		else 
			return true;
	}

	return false;
}