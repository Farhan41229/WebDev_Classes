// ////////////////////////////////////////////////////////////////////

// Task 5 (Function Practise)

function ispalindrome(string) {
  let result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }
  console.log(result);
  result = result.join('');
  if (result == string) return true;
  else return false;
}

let string = 'madam';
console.log(string);
console.log(ispalindrome(string));

//// //////////////////////////////////////////////////////////////////
