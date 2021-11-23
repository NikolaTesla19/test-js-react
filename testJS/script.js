//задание 1
const someFn = (str) => {
  let newStr = str.trim();
  if (!newStr) return newStr;
  return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
}
//задание 2
const sayHello = (str) => {
  let newStr = str.trim();
  if (newStr.toLowerCase() === "mark"){
    return 'Hi, ' + newStr[0].toUpperCase() + newStr.slice(1).toLowerCase()
  } else {
    return 'Hello, ' + newStr[0].toUpperCase() + newStr.slice(1).toLowerCase()
  }
}
//задание 3
const filterStrings = (arr, number) => {
  let newArr = arr.filter((str) => str.length <= number);
  return newArr
}
