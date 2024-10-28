// 1 Question

let array = [1, 2, 3];
let isUnique = true;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            isUnique = false;
            break; 
        }
    }
    if (!isUnique) {
        break; 
    }
}

console.log(`The array has unique elements: ${isUnique}`);

// 2 Question

let array1 = [1,2,3,5,6,7];
let n = 7;
let actual_sum = 0;
let expected_sum = (n * (n + 1)) / 2;

for (i = 0; i < array1.length; i++) {
    actual_sum += array1[i];
}
let missing_numbers = expected_sum - actual_sum;
console.log(missing_numbers)

// 3 Question

let arr = ['apple', 'banana', 'watermelon', 'grape', 'pineapple'];

let longest_words = '';

for (i =0; i < arr.length; i++) {
    if(arr[i].length > longest_words.length) {
        longest_words = arr[i]
    }
}
console.log(longest_words);