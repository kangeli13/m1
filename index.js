// Create a variable named x and assign to it the number 14. 
// Execute a subtraction between the number 12 and the variable x.
let x = 14;
console.log(x/12);

// Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
//  Verify that name1 is different from name2 (HINT: check their equality to be false).
//  Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
let name1 = "john";

let name2 = "John";

console.log(name1 === name2)

if (name2.toLowerCase() === name1.toLowerCase()) {
    
    console.log(true)
}
