// template - // Quest __ (__)

// Quest 56 (Результат работы фукнции в переменную)
let processed = processArg(7);
function processArg(num) {
  return (num + 3) / 5;
}
console.log(processed);

// Quest 57 () (Добавьте элемент в конец массива а потом удалите первый элемент и верните его значение через вызов функции)
const nextInLine = (arr, item) => {
  arr.push(item);
  return arr.shift();
}
console.log(nextInLine([], 5));

// Quest 58 (Тип данных Boolean)
function welcomeToBooleans() {
  return true;
}

// Quest 59 (operator IF)
const trueOrFalse = (wasThatTrue) => {
  if (wasThatTrue === true) {
    return 'Yes, that was true'
  } else {
    return 'No, that was false'
  }
}

// Quest 60 (Comparison with the Equality Operator)
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// Quest 61 (Comparison with the Strict Equality Operator)
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// Quest 62 (Practice comparing different values)
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// Quest 63 (Comparison with the Inequality Operator)
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// Quest 64 (Comparison with the Strict Inequality Operator)
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// Quest 65 (Comparison with the Greater Than Operator)
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);