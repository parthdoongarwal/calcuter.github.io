const root = document.getElementById("root");
const small = document.getElementById("dkdkd");
//eval

let numberArray = [];

function add(value) {
  numberArray.push(value);
  forSmall();
  console.log(numberArray);
  show();
}

function solve() {
  const ja = numberArray.join("");
  numberArray = [];
  root.textContent = eval(ja);
}

function clearr() {
  small.textContent = "";
  numberArray = [];
  console.log("d");
  root.textContent = "";
}

function show() {
  for (let i = 0; i < numberArray.length; i++) {
    root.textContent = numberArray[i];
  }
}

function remove() {
  numberArray.pop();
  forSmall();
}

function forSmall() {
  small.textContent = "";
  for (let i = 0; i < numberArray.length; i++) {
    small.textContent += numberArray[i];
  }
}
