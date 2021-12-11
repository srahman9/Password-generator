// Assignment code here
function generate() {
  let password = "";

  let length = prompt("How many characters would you like your password?");
  console.log(length);
  let lowerCase = confirm("Will this contain lowercase letters?");
  console.log(lowerCase);
  let upperCase = confirm("Will this contain uppercase letters?");
  console.log(upperCase);
  let symbol = confirm("Will this contain symbol?");
  console.log(symbol);
  let number = confirm("Will this contain numbers?");
  console.log(number);

  if (length < 8) {
    alert("Password length must be atleast 8 characters Try again");
    return;
  }

  if (length > 128) {
    alert("Password length must be under 128 characters Try again");
    return;
  }

  if (lowerCase + upperCase + symbol + number <= 0) return;

  for (let i = 0; i < length; i++) {
    const r = generater(0, 3);
    if (lowerCase && r === 0) {
      password += generateRandomLowerCase();
    } else if (upperCase && r === 1) {
      password += generateRandomUpperCase();
    } else if (symbol && r === 2) {
      password += generateRandomSymbol();
    } else if (number && r === 3) {
      password += generater(0, 9);
    } else {
      i--;
    }
  }

  document.getElementById("result").textContent = password;
}

function generateRandomLowerCase() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase[generater(0, lowercase.length - 1)];
}

function generateRandomUpperCase() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[generater(0, uppercase.length - 1)];
}

function generateRandomSymbol() {
  const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
  return symbols[generater(0, symbols.length - 1)];
}

function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

generate();
