function calculator(num1,operator,num2) {
	return {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num2 ? num1 / num2 : 'Cannot divide by 0!'
	}[operator]
}


//
function calculator(num1, operator, num2) {
	operations = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => b ? a / b :"Can't divide by 0!"
	}

	return operations[operator](num1,num2)
}



//
function Calculator() {
  this.methods = {'+': (a, b)=>a+b, '-': (a, b)=>a-b};
  this.calculate = function(str) {
  let x = str.split(' '), a = +x[0], op = x[1], b = +x[2];
  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return this.methods[op](a, b);
}
  this.addMethod = function(name , func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
