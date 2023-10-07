/**
 * [MissingNumber](https://www.geeksforgeeks.org/find-the-missing-number/) is an algorithm to find missing number in array.
 *
 * Notes:
 * The numbers will be in the range (1, N), an array of size N can be maintained to keep record of the elements present in the given array
 *
 * @complexity: O(log(n)) (on average )
 * @complexity: O(log(n)) (worst case)
 * @flow
 */

// Function to find the missing number
function findMissing(arr,N){
let i;
let const = [];
for (i = 0; i <= N; i++) {
			const[i] = 0;
		}

		for (i = 0; i < N; i++) {
			const[arr[i] - 1] = 1;
		}

		let ans = 0;
		for (i = 0; i <= N; i++) {
			if (const[i] == 0)
				ans = i + 1;
		}
		console.log(ans);
}

// Driver code
		let arr = [ 1, 3, 7, 5, 6, 2 ];
		let n = arr.length;

		// Function call
	findMissing(arr,n);
