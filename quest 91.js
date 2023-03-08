const checkObj = (obj, checkProp) => {
    let result = '';
    if (obj.hasOwnProperty(checkProp) !== false) {
        result = obj[checkProp]
    } else {
        result = 'Not Found'
    }
    return result;
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))