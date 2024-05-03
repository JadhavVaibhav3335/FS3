// Using type assertion
let numStr: any = "10";
let num: number = <number>numStr; // Type assertion
console.log("Using type assertion:", num); // Output: 10

// Using parseInt() function
let strNum: string = "20";
let parsedNum: number = parseInt(strNum);
console.log("Converted string to number using parseInt():", parsedNum); 