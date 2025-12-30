let arr = [10,20,30,40];

console.log("Orriginal Arr -", arr);

console.log("Adding Elements - ")
//Push Operations
arr.push(50);
console.log("Updated after push operations - ", arr)

//Unshift Operations
arr.unshift(3)
console.log("Updated after unshift operations - ",arr)

console.log("Removing Elements - ")
//Pop Operations
arr.pop();
console.log("Updated after pop operations -", arr)
arr.shift();
console.log("Updated after shift operations - ", arr)


console.log("Splice Operations {array.splice(startIndex, deleteCount, item1, item2, ...)} - ")
console.log("Used to add/remove elements from any index...")
arr.splice(4,0,6); //Remove 1 element at index 1 and add 25
console.log("Adding element '6' in index 4 arr.splice(4,0,6); -" ,arr);

arr.splice(2,0,5);
console.log("Adding element '5' in index 5 arr.splice(2,0,5); -" ,arr);
arr.splice(1, 2, 25);
console.log("Removing index 1 and 2 and adding 25 to the array")
console.log("Updated Operations after splice - ",arr)

console.log("Merge array - using CONCAT -")
let arr2 = [3,1];
let merge_array = arr.concat(arr2);
console.log("After Merging arr2 = [3,1] we get - ", merge_array)

let joined = arr.join("-");
console.log("Joined Array:", joined);

console.log("Using forEach:");

arr.forEach((value,index) => {
    console.log(`Index ${index}: ${value}`);
});

const matrix = [[2,3,4],[4,3,2],[1,2,1]]
console.log(matrix)

let index = arr.indexOf(30);
console.log("Index of - ", index)

console.log("Original Array -",arr)
let reverse = arr.reverse()
console.log("Reversed Array -", reverse)

arr.sort();               // ❌ string sort
console.log(arr);         // [1, 10, 2]

arr.sort((a, b) => a - b); // ✅ numeric sort
console.log(arr);          // [1, 2, 10]

for(let i =0 ; i <arr.length ; i++)
{
    console.log(arr[i])
}
