// sum, sub, mult, div
console.log(process.argv);

const [operation, ...numbers] = process.argv.slice(2)
// console.log('numbers', numbers)
// console.log('operation', operation)
const numbersArr = numbers.map(item => Number(item))

// if (operation === "sum") {
//   const result =  numbersArr.reduce((acc, item) => Number(acc)+Number(item))
// //   console.log(result);
// }
// if (operation === "sub") {
//     const result = numbersArr.reduce((acc, item) => acc-item)
//     // console.log('result', result)
// }
// if (operation === "mult") {
//     const result = numbersArr.reduce((acc, item) => acc*item)
//     console.log('result', result)
// }
// if (operation === "div") {
//     const result = numbersArr.reduce((acc, item) => acc/item)
//     console.log('result', result)
// }

switch (operation) {
    case "sum": 
        console.log(sum(operation, numbers));
        break;

    case "sub":
        console.log(sub(operation, numbers));
        break;
    
    case "mult":
        console.log(mult(operation, numbers));
        break;
    
    case "div":
        console.log(div(operation, numbers));
        break;
    
    default: console.log("Unknown operation type");
}







    

// console.log(sum(operation, numbers));
// console.log(sub(operation, numbers));
// console.log(mult(operation, numbers));
// console.log(div(operation, numbers));