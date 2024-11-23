////////////////////////////////

// Task 1 (Arrays)

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}

let intarray = [1, 2, 3, 4, 5];
console.log(intarray);
console.log(calcAverage(intarray));
intarray.push(10);
intarray.shift();
console.log(intarray);
console.log(calcAverage(intarray));
intarray.forEach((number, index) => {
  console.log(`Number: ${number}, Index: ${index}, Square: ${number * number}`);
});

///////////////////////////////////////
