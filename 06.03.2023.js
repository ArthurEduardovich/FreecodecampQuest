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