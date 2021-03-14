/********************ASSIGNMENT ONE**********************/

//Create a function to perform mathematical operations based on the third argument

function returnOperationType (numberOne, numberTwo, mathOperation) {

    //Write a Conditional statement to test for the last argument of "sum"
    if (mathOperation === 'multiply') {
        const multiplicationOfNumbers = numberOne * numberTwo;
        return multiplicationOfNumbers;

    //Write a Conditional statement to test for the last argument of "division"
    }if (mathOperation === 'division') {
        const divisionResults = numberOne / numberTwo;
        return divisionResults;
    }
    //Write a Conditional statement to test for the last argument of "Multiplication"
    if (mathOperation === 'sum') {
        const sumOfNumbers = numberOne + numberTwo;
        return sumOfNumbers; 
    }  
}


//Using the console to inspect the operations in the function.
console.log(returnOperationType(100, 20, 'sum'));
console.log(returnOperationType(100, 20, 'multiply'));
console.log(returnOperationType(100, 20, 'division'));

