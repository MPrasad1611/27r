// arr=[2,5,3,11,4]
// op=arr.reduce((x,y)=>{
//     console.log(x+y)
//     return x+y;
// })
const a=[12, 55, -2, 90, 33, -77, 18];
let op=a.filter((v)=>{return v>50})
console.log(`The values greater than 50 are ${op}`)
let r=a.some(v=>{return v<0})
console.log(`It has Atleast one negative value and that is ${r}`)
let r1=a.every(v=>{return v%2==0})
console.log(`All Elements Are even and that is ${r1}`)

const fruits = ['banana', 'apple', 'grape', 'kiwi', 'orange'];
const numbers = [10, 20, 30, 40, 50];

const sortedFruits = fruits.sort();
console.log('Sorted Fruits:', sortedFruits);


const reversedNumbers = numbers.reverse();
console.log('Reversed Numbers:', reversedNumbers);


const sum = reversedNumbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of Reversed Numbers:', sum);

const words = ["hello", "world", "this", "is", "JavaScript"];


const reversedConcatenation = words.reduceRight((acc, word) => acc + " " + word);
console.log("Concatenated in Reverse Order:", reversedConcatenation);

const filteredWords = words.filter(word => word.length >= 5);
console.log("Filtered Words (Greater than or equal to 5 characters):", filteredWords);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };


const mergedObj = Object.assign({}, obj1, obj2);
console.log("Merged Object:", mergedObj); 

Object.freeze(mergedObj);

mergedObj.a = 100; 
delete mergedObj.c; 
mergedObj.e = 5; 

console.log("After Freezing:", mergedObj); 


const sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);


sealedObj.z = 30; 
sealedObj.x = 100; 
delete sealedObj.y; 

console.log("After Sealing:", sealedObj); 

console.log("Is sealedObj sealed?", Object.isSealed(sealedObj)); 
