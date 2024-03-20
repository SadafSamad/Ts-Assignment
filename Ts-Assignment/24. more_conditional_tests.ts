

// Equality and Inequality Test 1 
console.log("Equality test with string:","Apple"==="Apple");

// Equality and Inequality Test 2
console.log("InEquality test with string: ", ("Apple"as string) != "orange");

 // Tests using the lower case function
 console.log(" Lower Case Function Test:","HELLO".toLowerCase() === "hello");

 // Numerical tests involving equality 
 console.log("Equality test with number:", 26 === 26);
// Numerical tests involving inequality 
console.log("Inequality test with number:", (26 as number) != 35);

 //greater than test
 console.log("Greater then test", 10 > 5);
 // less than test
 console.log("Less then test", 5 < 10);
//greater than or equal to 
console.log("Greater then and equal to test:", 10 >= 10);
//less than or equal to,
console.log("less then or equal to test", 5 <= 10);

//Tests using "and" operator
console.log("And operator test: ", 5 ==5 && 10 > 5);
//Tests using "or" operator
console.log("or operator test: ", 5===5 || false);

//Test whether an item is in a array
const furits :string[] = ['Nashpati','Banana','Amrood'];
console.log('Test"Nashpati" in the array:', furits.includes("Nashpati"));

////Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ',!furits.includes('Apple') );

