/********************ASSIGNMENT ONE**********************/

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




/*****************ASSIGNMENT TWO***********************/
/*****************CONDITIONALS************************/


//Conditionals
//Students Grades
const jamesGrades = 100;
const peterGrades = 69;
const paulGrades = 50;

//Comparing Peter's grade to Paul's and Jame's
if(peterGrades > paulGrades && peterGrades > jamesGrades) 
{
  console.log("Peter is the best!");
}
//Checking for Peter's, James and Paul's overall position
else if(peterGrades > paulGrades && peterGrades < jamesGrades)
{
  console.log("James is the best but Peter is beter than Paul");
}
//Checking if Peter came out last in the class
else{
  console.log("Peter did worse this year");
}

//Using the Equality sign 
const specialNum = "100";
const numeral = 100;

if(specialNum == numeral) {
  console.log("Both are equivalent numbers")
}else {
  console.log("Both are not equivalent numbers")
}

//Using the Strict Equivalence
if(specialNum === numeral) {
  console.log("Both are exact numbers")
}else {
  console.log("We are not strictly equal");
}
