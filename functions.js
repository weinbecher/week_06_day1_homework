
// name function
console.log('sayHello message:', sayHello('Hi'));

function sayHello(greeting, name = 'World'){

  return `${greeting} ${name}`;

}

// // need the bracket

 // //Hoisting is JavaScript's default behavior of moving declarations to the top. JavaScript Declarations are Hoisted

// anonymous function
var add = function (firstNum, secondNum){
  return firstNum + secondNum;
}
console.log('1 + 4 with add:', add(1, 4));


//arrow function
var multiply = (firstNum , secondNum) => firstNum * secondNum

console.log(multiply(2,5))
