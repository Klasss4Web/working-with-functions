//Create a function to perform mathematical operations based on the third argument

function returnOperationType (num1, num2, operation) {

    //Write a Conditional statement to test for the last argument of "sum"
    if (operation === 'sum') {
        return num1 + num2;

    //Write a Conditional statement to test for the last argument of "division"
    }else if (operation === 'division') {
        return num1 / num2;
    }
    //Write a Conditional statement to test for the last argument of "Multiplication"
    else if (operation === 'multiplication') {
        return num1 * num2;
    }
    // Default statement in the absence of a valid operation.
    else{
        return "Please check your arguments!"
    } 
}


//Using the console to inspect the operations in the function.
console.log(returnOperationType(100, 20, 'sum'));
console.log(returnOperationType(100, 20, 'multiplication'));
console.log(returnOperationType(100, 20, 'division'));
console.log(returnOperationType(100, 20, 'null'));