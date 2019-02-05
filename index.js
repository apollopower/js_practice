// Write a function that takes an integer, "num", and RETURNS the sum
// of all integers between zero and num, including num

// Example: sumNum(4) == 0 + 1 + 2 + 3 + 4

function sumNum(num) {
	// Code here
	let total = 0;
	i = 0;
	while (i <= num) {
		total += i
		i++;
	}
	return total;
}


console.log(sumNum(4) === 10);
