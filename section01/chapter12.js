function funcA() {
  console.log("This is function A");
}

let varA = funcA;
varA();

let varB = function () {
  console.log("This is an anonymous function");
};

varB();

let varC = (value) => {
  console.log(varC);
  return value + 1;
};

console.log(varC(10));