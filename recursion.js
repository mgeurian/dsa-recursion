/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
	if (nums.length === idx) return 1;

	return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longer = 0) {
	if (words.length === idx) return longer;
	longer = Math.max(words[idx].length, longer);
	return longest(words, idx + 1, longer);
}
/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newString = '') {
	if (str.length <= idx) return newString;
	newString += str[idx];
	return everyOther(str, idx + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
	let leftIndex = index;
	let rightIndex = str.length - index - 1;
	if (leftIndex >= rightIndex) return true;
	if (str[leftIndex] !== str[rightIndex]) return false;
	return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
	if (index === arr.length) return -1;
	if (arr[index] === val) return index;
	return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, newString = '') {
	if (newString.length === str.length) return newString;
	newString += str[str.length - 1 - index];
	return revString(str, index + 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let stringArray = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') stringArray.push(obj[key]);
		if (typeof obj[key] === 'object') stringArray.push(...gatherStrings(obj[key]));
	}
	return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
	if (left > right) {
		return -1;
	}
	let middle = Math.floor((right + left) / 2);
	if (arr[middle] === val) {
		return middle;
	}
	if (arr[middle] > val) {
		return binarySearch(arr, val, left, middle - 1);
	}
	return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
