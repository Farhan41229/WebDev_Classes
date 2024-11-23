///////////////////////////////////////

// Task 2 (Conditional logic)

function checkElegibilityStatus(age){
  if(age<18) return `Not eligible to vote`;
  else if (age>=18 && age<=60) return `Eligible to vote`;
  else return `Eligible to vote and recieve senior benifits..`;
}

function reversestring(string){
  let reversestring = [];
  for(let i=string.length-1; i>=0;i--){
      reversestring.push(string[i]);
  }
  return reversestring.join('');
}

let age = 80;
console.log(checkElegibilityStatus(age));

////////////////////////////////////
