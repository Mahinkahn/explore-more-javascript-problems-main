// unction radianToDegree(raden) {
//     return raden * 57.2958;
// }

// let result = radianToDegree(199);
// console.log(result);


function isJavaScriptFile(fileName) {
    const isJs = fileName.slice(-3);
    if (isJs === ".js")
        return true;
    else
        return false
}

//  const fileName = "index.jpg";
let result = isJavaScriptFile("index.js");
console.log(result);










// function oilPrice(petrol, diesl, octane) {
//     return petrol * 114 + diesl * 130 + octane * 135;
// }
// let result = oilPrice(30, 20, 10);
// // console.log(result);






























const totalCost = [
    { name: 'diesl', price: 114, quantity: 30 },
    { name: 'petrol', price: 130, quantity: 20 },
    { name: 'octane', price: 135, quantity: 10 },

];

function oilPrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = oilPrice(totalCost);
console.log(expense);