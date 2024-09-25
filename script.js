const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];          // To store the final result
    let currentSubarray = [];   // To build the current subarray
    let currentSum = 0;         // To track the sum of the current subarray
    
    for (let num of arr) {
        // Check if adding the current number exceeds the maximum allowed sum
        if (currentSum + num > n) {
            // If it exceeds, finalize the current subarray
            result.push(currentSubarray);
            // Start a new subarray with the current number
            currentSubarray = [num];
            currentSum = num; // Reset the current sum
        } else {
            // If it doesn't exceed, add the current number to the subarray
            currentSubarray.push(num);
            currentSum += num; // Update the current sum
        }
    }
    
    // Add the last subarray if it has any elements
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }
    
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
