class CalculatorOOPSingle {
    // constructor(operation, numbersArr) {
    //     this.arr = numbersArr;
    //     this.operation = operation
    // }

    static init = (operation, arr) => {
        this.actionHandler(operation, arr)
    }

    static mult = (operation, arr) => {
        if (operation === "mult") {
            return arr.reduce((acc, item) => acc * item)
        }
    }

    static div = (operation, arr) => {
        if (operation === "div") {
            return arr.reduce((acc, item) => acc / item)
        }
    }

    static sub = (operation, arr) => {
        if (operation === "sub") {
            return arr.reduce((acc, item) => acc - item)
        }
    }

    static sum = (operation, arr) => {
        if (operation === "sum") {
            return arr.reduce((acc, item) => acc + item)
        }
    }

    static actionHandler = (operation, numbers) => {
        switch (operation) {
            case "sum": 
                console.log(this.sum(operation, numbers));
                break;
        
            case "sub":
                console.log(this.sub(operation, numbers));
                break;
            
            case "mult":
                console.log(this.mult(operation, numbers));
                break;
            
            case "div":
                console.log(this.div(operation, numbers));
                break;
            
            default: console.log("Unknown operation type");
        }
    }
}


const [operation, ...numbers] = process.argv.slice(2);
const numbersArr = numbers.map(item => Number(item));


module.exports = CalculatorOOPSingle.init(operation, numbersArr);