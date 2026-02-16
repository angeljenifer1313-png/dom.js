let numbers = [25, 10, 45, 5, 30];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Largest Element:", largest);
console.log("Smallest Element:", smallest);