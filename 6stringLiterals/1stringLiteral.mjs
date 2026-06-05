console.log("Rishav")
console.log('Rishav')
console.log(`Rishav`)

// we cant use single quote inside single quote and double quote inside double quote
// but we can use single quote inside double quote and double quote inside single quote

//Use of backticks
let name="Rishav";
let surname="Karki"
let fullname=`My name is ${name} ${surname}`;
console.log(fullname)



let a=10;
let b=20;
let sum=`The sum of ${a} and ${b} is ${a+b}`;
console.log(sum)
// we can perform operations inside backticks using ${} and it will evaluate the expression and give us the result.